# Gomez Hospital SEO implementation and audit

Date: 18 September 2026. Production origin: https://gomezhospital.com.

Implementation and validation were performed locally. Nothing has been deployed, submitted to Google, or verified in a Search Console account. Existing SEO was inspected before edits and reused. Installed Next.js 16.2.6 metadata, icon, sitemap, robots and title-template documentation was read before implementation.

## 1. Every file changed or added

- [docs/SEO-AUDIT.md](W:/Gomez-update-main/docs/SEO-AUDIT.md)
- [docs/seo-audit-results.json](W:/Gomez-update-main/docs/seo-audit-results.json)
- [next.config.ts](W:/Gomez-update-main/next.config.ts)
- [scripts/audit-seo.mjs](W:/Gomez-update-main/scripts/audit-seo.mjs)
- [src/app/about/page.tsx](W:/Gomez-update-main/src/app/about/page.tsx)
- [src/app/branches/[slug]/page.tsx](W:/Gomez-update-main/src/app/branches/[slug]/page.tsx)
- [src/app/careers/page.tsx](W:/Gomez-update-main/src/app/careers/page.tsx)
- [src/app/collecting-centers/page.tsx](W:/Gomez-update-main/src/app/collecting-centers/page.tsx)
- [src/app/contact/page.tsx](W:/Gomez-update-main/src/app/contact/page.tsx)
- [src/app/doctors/page.tsx](W:/Gomez-update-main/src/app/doctors/page.tsx)
- [src/app/event/page.tsx](W:/Gomez-update-main/src/app/event/page.tsx)
- [src/app/health-packages/[id]/page.tsx](W:/Gomez-update-main/src/app/health-packages/[id]/page.tsx)
- [src/app/health-packages/page.tsx](W:/Gomez-update-main/src/app/health-packages/page.tsx)
- [src/app/layout.tsx](W:/Gomez-update-main/src/app/layout.tsx)
- [src/app/page.tsx](W:/Gomez-update-main/src/app/page.tsx)
- [src/app/promotion/page.tsx](W:/Gomez-update-main/src/app/promotion/page.tsx)
- [src/app/services/page.tsx](W:/Gomez-update-main/src/app/services/page.tsx)
- [src/app/sitemap.ts](W:/Gomez-update-main/src/app/sitemap.ts)
- [src/components/DoctorCard.tsx](W:/Gomez-update-main/src/components/DoctorCard.tsx)
- [src/components/DoctorList.tsx](W:/Gomez-update-main/src/components/DoctorList.tsx)
- [src/components/Footer.tsx](W:/Gomez-update-main/src/components/Footer.tsx)
- [src/components/Header.tsx](W:/Gomez-update-main/src/components/Header.tsx)
- [src/components/JsonLd.tsx](W:/Gomez-update-main/src/components/JsonLd.tsx)
- [src/components/PromotionGroups.tsx](W:/Gomez-update-main/src/components/PromotionGroups.tsx)
- [src/components/home/About.tsx](W:/Gomez-update-main/src/components/home/About.tsx)
- [src/lib/seo.ts](W:/Gomez-update-main/src/lib/seo.ts)

There are 22 modified application/configuration files and 4 new component/audit/report files. The initial working tree was clean. Data files, package prices, doctor names, service information and branch information were not edited. Existing src/app/robots.ts and file-based icons were inspected and retained.

## 2. All pages with metadata

All 20 valid public pages retain unique titles and descriptions and receive the improved shared canonical, Open Graph and Twitter metadata. Existing factual page descriptions and titles were reused. The home description now explicitly includes channeling and removes the unnecessary word “trusted”.

| Route | Verified rendered title |
| --- | --- |
| `/` | Gomez Hospital Avissawella | Private Healthcare & Medical Services |
| `/about` | About Gomez Hospital Avissawella | Our History & Team |
| `/services` | Medical Services in Avissawella | Gomez Hospital |
| `/doctors` | Doctors in Avissawella | Gomez Hospital Specialist Channeling |
| `/health-packages` | Health Checkup Packages in Avissawella | Gomez Hospital |
| `/promotion` | Healthcare Promotions & Discounts | Gomez Hospital |
| `/event` | Health Events & Community Activities | Gomez Hospital |
| `/careers` | Careers at Gomez Hospital | Healthcare Jobs in Avissawella |
| `/contact` | Contact Gomez Hospital Avissawella | Phone, Email & Location |
| `/collecting-centers` | Laboratory Sample Collection Centers | Gomez Hospital |
| `/branches/hanwella` | Hanwella Medical Center | Gomez Hospital |
| `/health-packages/a` | Package A – General Health Checkup | Gomez Hospital |
| `/health-packages/b` | Package B – Smart Health Check | Gomez Hospital |
| `/health-packages/c` | Package C – Elder Basic Package | Gomez Hospital |
| `/health-packages/d` | Package D – Elder Premium — Female | Gomez Hospital |
| `/health-packages/e` | Package E – Elder Premium — Male | Gomez Hospital |
| `/health-packages/f` | Package F – Cardiac Basic | Gomez Hospital |
| `/health-packages/g` | Package G – Cardiac Advance | Gomez Hospital |
| `/health-packages/h` | Package H – Diabetic Basic | Gomez Hospital |
| `/health-packages/i` | Package I – Diabetic Premium | Gomez Hospital |

The root defines metadataBase using the existing production site URL; default title and description; template “%s | Gomez Hospital Avissawella”; application name; index/follow directives; and Google image/snippet/video preview directives. Existing complete branded titles use title.absolute so the template does not repeat the brand. Existing favicon.ico, icon.png and apple-icon.png provide the icon metadata through Next.js file conventions. No verification code was added.

## 3. Doctor names and specialties

Previously DoctorList called useSearchParams inside a Suspense boundary whose initial fallback was “Loading...”. That prevented the static response from containing the directory. DoctorList now reads the URL parameters in its existing mount effect using URLSearchParams(window.location.search). This allows all 36 doctor cards to prerender in initial HTML. No browser global is read during server rendering.

The existing name search, suggestions, keyboard controls, specialty filters, clinic filters, qualifications, hospital affiliations, consultation-day text and booking controls remain. Names use h2 headings with the same classes. All 36 names and specialties were checked in initial HTML with scripts removed; the full directory was also checked in the response to a URL containing q and specialty parameters. The Hanwella table already prerenders all 31 specialist/counsellor entries and remains unchanged. No individual doctor routes existed or were created.

A doctor ItemList uses Person entries with factual name, jobTitle/specialty, source hospital affiliation, and a description assembled from existing qualifications and consultation-day text. No registration numbers, schedules or affiliations were invented. The directory includes incomplete names in separate OPD/clinic content; those source names were preserved. Schema.org Physician describes a medical business/office, so Person was chosen for individual people: https://schema.org/Physician.

Browser interactions were preserved through minimal source changes; the automated audit checks the server HTML and responses, rather than simulating interaction after hydration.

## 4. Structured data

- Hospital: reused and improved the existing root entity, including name, URL, logo, hospital image, founding year, email, phone, address and existing contact numbers.
- WebSite: added to the root graph, linked to the Hospital publisher.
- MedicalClinic: added on Hanwella, using its actual name, description, address, phones, URL and image, linked to the parent Hospital.
- BreadcrumbList: added to all 19 non-home public pages; package details include Home → Health Packages → Package. No visible breadcrumb UI was added.
- ItemList/ListItem/Person: added for the 36 doctors using existing source data.
- ItemList/ListItem/Service: added for all 12 real service sections, linked to the Hospital provider and existing section anchors.
- PostalAddress, ContactPoint and Organization: supporting entities/references only.

The existing blanket Hospital openingHours and availableLanguage claims were removed from JSON-LD because source emergency/department hours and bilingual page text do not verify all hospital departments' opening hours or staff language availability. Public visible information was preserved. Hanwella hours were omitted from schema because its source contains conflicting laboratory hours.

No JobPosting was added: the careers listing lacks actual datePosted values and individual job detail pages, and job location is not explicitly supplied per opening. Google requires adequate factual job data and a page dedicated to each job: https://developers.google.com/search/docs/appearance/structured-data/job-posting. Receptionist, Phlebotomist, Secretary, Maintenance Assistant and Channeling Nurse remain in crawlable HTML. No salary, deadline or employment type was invented. No Event, promotional Offer, ratings or review schema was added without confirmed validity data.

JSON-LD is rendered on the server, parsed successfully by the audit, and escapes less-than signs to avoid unsafe script content. No Google rich-result eligibility or indexing is claimed from this local validation.

## 5. Sitemap routes

The existing sitemap was improved with canonical URL generation and deduplication. It contains exactly these 20 valid public routes, with no invented modification timestamps:

- `https://gomezhospital.com`
- `https://gomezhospital.com/about`
- `https://gomezhospital.com/services`
- `https://gomezhospital.com/doctors`
- `https://gomezhospital.com/health-packages`
- `https://gomezhospital.com/promotion`
- `https://gomezhospital.com/event`
- `https://gomezhospital.com/careers`
- `https://gomezhospital.com/contact`
- `https://gomezhospital.com/collecting-centers`
- `https://gomezhospital.com/branches/hanwella`
- `https://gomezhospital.com/health-packages/a`
- `https://gomezhospital.com/health-packages/b`
- `https://gomezhospital.com/health-packages/c`
- `https://gomezhospital.com/health-packages/d`
- `https://gomezhospital.com/health-packages/e`
- `https://gomezhospital.com/health-packages/f`
- `https://gomezhospital.com/health-packages/g`
- `https://gomezhospital.com/health-packages/h`
- `https://gomezhospital.com/health-packages/i`

Services are sections of /services, not standalone routes. /branches is not a valid page; navigation correctly uses /branches/hanwella. No doctor detail routes exist. Icons, 404s, private/test routes, fragments and query variants are excluded.

## 6. robots.txt

Existing configuration retained and verified over HTTP:

~~~text
User-Agent: *
Allow: /

Host: https://gomezhospital.com
Sitemap: https://gomezhospital.com/sitemap.xml
~~~

All public pages allow indexing and following. The production sitemap is referenced. No public route returns noindex. Real 404 responses do contain noindex.

## 7. Canonical URLs

The shared canonicalUrl helper always uses the production origin, removes queries and fragments, and removes trailing slashes except for the root. All pages have exactly one canonical. Next.js serializes the root metadata URL as https://gomezhospital.com; the equivalent sitemap root URL may include /. next.config.ts explicitly sets trailingSlash: false; actual /doctors/, /services/ and /branches/hanwella/ responses were checked for HTTP 308 redirects.

Doctor search/filter query variants canonicalize to /doctors and continue to work as interface filters. Anchors remain useful navigation targets and are not separate sitemap/canonical entries. Invalid branch/package metadata now invokes notFound instead of returning an empty metadata object.

Canonicals are search-engine signals rather than guarantees; deployment must preserve these headers/HTML and use the production domain consistently. Reference: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls.

## 8. Open Graph and Twitter/X

All 20 pages use their own title, description and canonical social URL, website type, en_LK locale, Gomez Hospital site name, absolute existing image URLs and descriptive image alt text. Twitter uses summary_large_image. Most pages use the real hospital building photo /images/2021-05-11.jpg. Its dimensions were measured and corrected from 1360×768 to 1360×766.

Hanwella sharing uses the existing /images/Gomez-Hospital-Hanwella.jpg (250,173 bytes), instead of the 6,322,332-byte PNG used by the visible branch page. This avoids a large social crawler download while retaining the visible design. Unknown image dimensions are omitted rather than copied from another image.

## 9. Image alt text, headings and safe performance

- Home hospital exterior: “Gomez Hospital Avissawella main building”.
- Home staff image: natural “Gomez Hospital staff”.
- Header/footer logos: “Gomez Hospital logo”.
- Service images: source service title followed by “at Gomez Hospital Avissawella”.
- Social building image: “Gomez Hospital Avissawella main building”; Hanwella uses the branch name.
- Existing branch and director image alts were already meaningful and retained. Doctor cards use decorative icons, not doctor photographs; package cards do not contain package photographs.
- Both map iframes received descriptive titles.
- Corrected heading levels in doctor cards, package listing, collecting centers, contact, About vision/mission, and the Hanwella OPD section. Every rendered public page has exactly one h1.

Existing Next.js Image optimization, explicit dimensions/aspect-ratio containers, responsive sizes and above-the-fold priority handling were retained. Decorative CSS patterns do not require image alt attributes. No source images were overwritten and no risky performance refactor was performed. Runtime Core Web Vitals/Lighthouse measurements were not performed.

## 10. Internal links and 404 findings

All 32 unique rendered internal link destinations/anchors passed route and target-ID validation. Every sitemap route returned HTTP 200; referenced public image assets exist; favicon, icon and Apple icon returned HTTP 200. No broken public navigation routes or service anchors were found.

The Footer Instagram href="#" placeholder was converted to an inert span, retaining the icon/classes because the source has no confirmed Instagram URL. No profile was invented. Promotion category titles now link to the existing laboratory/pharmacy service sections or doctors directory; the specialist service heading links to /doctors. Home already links to services, doctor search, packages and Hanwella, so no navigation redesign was needed.

Deliberately nonexistent branch, package, service and doctor detail URLs, plus /branches, correctly returned HTTP 404 with noindex. Existing valid branch/package generation remains intact.

External websites, mailboxes, telephone availability, map embeds and live production server/domain redirects were not tested by the local route audit.

## 11. Issues intentionally left unchanged and validation limits

- Hanwella laboratory hours conflict: branch data says 6:00 AM–9:00 PM; branch page service data says 7:00 AM–8:00 PM. Preserved source data and omitted branch opening hours from schema pending confirmation.
- TopBar displays info@gomezhospital.lk while site/contact/footer use gomezhospital@gmail.com. No mailbox was changed without factual confirmation.
- Event dates in the source are July/August 2026, before this audit date, and weekday labels need confirmation. No dates were invented or events represented as upcoming through new Event schema.
- The main doctor directory has 36 entries while existing marketing text mentions 40/40+ specialists. Source text and names were retained.
- Main and Hanwella doctor lists use some differing name spellings, specialty labels and hospital references. No attempt was made to infer identities or change names.
- Several image sources are multi-megabyte PNGs; existing Next.js optimization protects page delivery, but a future reviewed asset-compression pass could reduce processing/storage costs. The social Hanwella image was safely improved with an existing smaller photo.
- Unconfirmed conditional discounts noted in promotions.ts were not published. Existing seven offers and real eligibility text remain.
- Existing stock/event image captions and medical/marketing descriptions were preserved; no new medical claims or unverified photo identities were added.
- Search Console ownership verification, sitemap submission, live canonical/domain redirects, Rich Results Test and production URL Inspection require a deployed site/account and were not performed. No verification token was added.

Validation:

- npm run build: PASS. Next.js 16.2.6 production compilation, TypeScript and generation of every valid public route completed.
- node node_modules/typescript/bin/tsc --noEmit: PASS.
- node scripts/audit-seo.mjs http://127.0.0.1:3100: PASS. 20 public pages; 36 main doctor names/specialties; 31 branch entries; 9 packages and public prices; 32 internal destinations; unique metadata; canonical/social URLs; parsable JSON-LD; one h1 per page; image alt/assets; icons; robots/sitemap; filter-query canonical; redirects and invalid-route 404/noindex checks.
- git diff --check: PASS.
- npm run lint: FAIL on 5 existing errors and 3 existing warnings. Original HEAD code confirms the offending patterns predate this task: setState in effects in BookingButton (1), DoctorList (2), QuickActions (1), and explicit any in clinics.ts (1). Existing warnings are unused Pill in Careers, Link in QuickActions and idx in ServicesPreview. No lint rules were disabled and no unrelated behavioral refactor was made.

The repeatable audit is in scripts/audit-seo.mjs; exact rendered titles/canonicals/schema presence are saved in docs/seo-audit-results.json. Start the production server on port 3100 before running the script. Its expected route list should be updated when real new public routes are added.

## 12. Scope confirmation

No unrelated UI/content/functionality was modified. Brand colors, layout classes, hospital/service descriptions, doctor names, doctor source records, package prices/tests, branch facts, promotions and career requirements were preserved. Changes are limited to SEO metadata/schema, semantic headings, descriptive alt/map titles, relevant internal links, the fake social-link fix, doctor initial-HTML rendering, explicit existing slash behavior and audit/report files. No duplicate keyword pages, fake medical claims, ratings, reviews, coordinates or accreditations were created. Nothing was committed or deployed.
