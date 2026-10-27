import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

// Run against a production build: npm run start -- --port 3100
// Then: node scripts/audit-seo.mjs http://127.0.0.1:3100
const base = process.argv[2] || 'http://127.0.0.1:3100';
const production = 'https://gomezhospital.com';
const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1], decode(m[2])]));
const tags = (html, name) => [...html.matchAll(new RegExp('<' + name + '\\b[^>]*>', 'g'))].map(m => attrs(m[0]));
const visibleHtml = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
const text = html => decode(visibleHtml(html).replace(/<[^>]*>/g, ' '));
const get = async path => { const response = await fetch(base + path); assert.equal(response.status, 200, path); return response.text(); };

const doctorSource = await fs.readFile('src/data/doctors.ts', 'utf8');
const doctorNames = [...doctorSource.matchAll(/name: "([^"]+)"/g)].map(m => m[1]);
const getDoctorSlug = (name) => name.replace(/^Dr\.\s*|^Dr\s+/i, '').toLowerCase().replace(/\./g, '').trim().replace(/\s+/g, '-');
const doctorSlugs = doctorNames.map(getDoctorSlug);

const sitemap = await get('/sitemap.xml');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => decode(m[1]));
assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
const routes = urls.map(url => { assert.equal(new URL(url).origin, production); return new URL(url).pathname; });

const expected = [
  '/', '/about', '/services', '/doctors', '/health-packages', '/branches/hanwella', '/promotion', '/event', '/careers', '/contact', '/collecting-centers',
  ...'abcdefghi'.split('').map(id => '/health-packages/' + id),
  ...doctorSlugs.map(slug => '/doctors/' + slug),
];
assert.deepEqual([...routes].sort(), expected.sort(), 'Sitemap route coverage');

const pages = new Map(await Promise.all(routes.map(async path => [path, await get(path)])));
const titles = new Set(), descriptions = new Set(), links = new Set();
const result = [];

for (const [path, html] of pages) {
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] || '');
  assert(title.includes('Gomez Hospital'), path + ': branded title');
  assert(!titles.has(title), path + ': duplicate title: ' + title); titles.add(title);
  const meta = tags(html, 'meta');
  const description = meta.find(m => m.name === 'description')?.content;
  assert(description, path + ': description');
  assert(!descriptions.has(description), path + ': duplicate description: ' + description); descriptions.add(description);
  assert(!meta.some(m => ['robots', 'googlebot'].includes(m.name) && /noindex/.test(m.content)), path + ': indexability');
  const canonical = tags(html, 'link').filter(m => m.rel === 'canonical');
  assert.equal(canonical.length, 1, path + ': canonical count');
  assert.equal(new URL(canonical[0].href).href, new URL(production + path).href, path + ': canonical');
  assert.equal(new URL(meta.find(m => m.property === 'og:url')?.content).href, new URL(production + path).href, path + ': OG URL');
  assert.equal(meta.find(m => m.property === 'og:title')?.content, title, path + ': OG title');
  assert.equal(meta.find(m => m.name === 'twitter:card')?.content, 'summary_large_image', path + ': Twitter card');
  const ogImage = meta.find(m => m.property === 'og:image')?.content;
  assert(ogImage?.startsWith(production + '/images/'), path + ': hospital social image');
  await fs.access('public' + new URL(ogImage).pathname);
  const content = visibleHtml(html);
  assert.equal((content.match(/<h1\b/g) || []).length, 1, path + ': one h1');
  for (const image of tags(content, 'img')) {
    assert('alt' in image, path + ': missing image alt');
    const url = new URL(image.src, production);
    const imagePath = url.pathname === '/_next/image' ? url.searchParams.get('url') : url.pathname;
    if (imagePath?.startsWith('/images/')) await fs.access('public' + imagePath);
  }
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  assert(schemas.some(s => s['@graph']?.some(n => n['@type'] === 'Hospital')), path + ': Hospital schema');
  if (path !== '/') assert(schemas.some(s => s['@type'] === 'BreadcrumbList'), path + ': breadcrumbs');
  
  // Doctor profile specific schema checks
  if (path.startsWith('/doctors/') && path !== '/doctors') {
    const person = schemas.find(s => s['@type'] === 'Person');
    assert(person, path + ': Person schema present');
    assert.equal(person['@id'], production + path + '#doctor', path + ': Person @id');
    assert(person.jobTitle, path + ': Person jobTitle');
    assert(person.url, path + ': Person url');
    if (person.affiliation) {
      assert(!person.affiliation.name.toLowerCase().includes('please contact'), path + ': confirmed affiliation only');
    }
    assert(!schemas.some(s => s['@type'] === 'Physician'), path + ': do not use Physician schema for individual doctors');
  }

  for (const a of tags(content, 'a')) {
    const href = a.href; if (!href || (/^(tel:|mailto:|https?:)/.test(href) || href.startsWith("//"))) continue;
    assert.notEqual(href, '#', path + ': placeholder link');
    links.add(href);
    const target = new URL(href, production);
    assert(pages.has(target.pathname), path + ': invalid internal route ' + href);
    if (target.hash) {
      const ids = [...visibleHtml(pages.get(target.pathname)).matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
      assert(ids.includes(decodeURIComponent(target.hash.slice(1))), path + ': missing anchor ' + href);
    }
  }
  result.push({ path, title, canonical: canonical[0].href, schemas: schemas.map(s => s['@type'] || s['@graph'].map(n => n['@type'])) });
}

// Doctor list page checks
const doctorText = text(pages.get('/doctors'));
for (const name of doctorNames) assert(doctorText.includes(name), 'Doctor missing from initial HTML: ' + name);
for (const specialty of [...doctorSource.matchAll(/specialty: "([^"]+)"/g)].map(m => m[1])) assert(doctorText.includes(specialty), 'Specialty missing: ' + specialty);

// ItemList schema on /doctors checks
const doctorPageSchemas = [...pages.get('/doctors').matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
const itemList = doctorPageSchemas.find(s => s['@type'] === 'ItemList');
assert(itemList, '/doctors: ItemList schema present');
assert.equal(itemList.itemListElement.length, doctorNames.length, '/doctors: all doctors in ItemList');
for (const item of itemList.itemListElement) {
  assert(item.url.startsWith(production + '/doctors/'), 'ItemList item url');
  assert.equal(item.item['@type'], 'Person', 'ItemList item Person type');
  assert(item.item['@id'], 'ItemList item @id');
  if (item.item.affiliation) {
    assert(!item.item.affiliation.name.toLowerCase().includes('please contact'), 'ItemList confirmed affiliation only');
  }
}

// Branch and package checks
const branchSource = await fs.readFile('src/data/branches.ts', 'utf8');
const branchNames = [...branchSource.matchAll(/name: "((?:Dr\.|Mr\.)[^"]+)"/g)].map(m => m[1]);
for (const name of branchNames) assert(text(pages.get('/branches/hanwella')).includes(name), 'Branch specialist missing: ' + name);
const packageSource = await fs.readFile('src/data/packages.ts', 'utf8');
const prices = [...packageSource.matchAll(/price: "([^"]+)"/g)].map(m => m[1]);
for (const [index, id] of [...'abcdefghi'].entries()) {
  assert(text(pages.get('/health-packages/' + id)).includes(prices[index]), 'Package price missing: ' + id);
  assert(text(pages.get('/health-packages')).includes('Package ' + id.toUpperCase()), 'Package listing missing: ' + id);
}

const robots = await get('/robots.txt');
assert.match(robots, /Allow: \//); assert(!/Disallow: \/(?:\s|$)/.test(robots));
assert(robots.includes('Sitemap: ' + production + '/sitemap.xml'));
for (const path of ['/favicon.ico', '/icon.png', '/apple-icon.png']) { const res = await fetch(base + path); assert.equal(res.status, 200, path); }

// 404 tests
for (const path of ['/branches/nonexistent', '/health-packages/nonexistent', '/services/nonexistent', '/doctors/nonexistent', '/branches']) {
  const res = await fetch(base + path);
  assert.equal(res.status, 404, path);
  assert((await res.text()).includes('noindex'), path + ': 404 noindex');
}

// Trailing slash redirect tests
for (const path of ['/doctors/', '/services/', '/branches/hanwella/']) {
  const res = await fetch(base + path, { redirect: 'manual' });
  assert.equal(res.status, 308, path + ': trailing slash redirect');
}

// Historical doctor slug redirects
const redirects = [
  ['/doctors/rashanthi-perera', '/doctors/rashanthie-perera'],
  ['/doctors/sanjaya-walawe-nayaka', '/doctors/sanjaya-walawenayaka'],
  ['/doctors/v-g-abeywickrama', '/doctors/vg-abeywickrama'],
  ['/doctors/a-w-p-manjula', '/doctors/awp-manjula'],
  ['/doctors/tharaka-nanayakkara', '/doctors/tharaka-s-nanayakkara'],
];
for (const [src, dest] of redirects) {
  const res = await fetch(base + src, { redirect: 'manual' });
  assert.equal(res.status, 308, `Redirect status 308 for ${src}`);
  assert.equal(res.headers.get('location'), dest, `Redirect location for ${src}`);
}

const queryPage = await get('/doctors?q=Sandamali&specialty=Family%20Doctor');
assert.equal(tags(queryPage, 'link').find(l => l.rel === 'canonical')?.href, production + '/doctors');
for (const name of doctorNames) assert(text(queryPage).includes(name), 'Query page initial directory: ' + name);

console.log(JSON.stringify({
  passed: true,
  publicPages: routes.length,
  doctorNames: doctorNames.length,
  branchSpecialists: branchNames.length,
  packages: prices.length,
  internalLinks: links.size,
  robots,
  doctorProfilesTested: doctorSlugs.length,
  redirectsTested: redirects.length,
}, null, 2));
