import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Calendar, Phone } from "lucide-react";
import { healthPackages } from "@/data/packages";
import { site } from "@/data/site";
import { BookingButton } from "@/components/BookingButton";

export function generateStaticParams() {
  return healthPackages.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = healthPackages.find((p) => p.id === id);
  if (!pkg) return {};
  return {
    title: `${pkg.title} — ${pkg.subtitle} | Gomez Hospital`,
    description: `${pkg.subtitle}. ${pkg.ideal}. Price: ${pkg.price}.`,
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pkg = healthPackages.find((p) => p.id === id);
  if (!pkg) notFound();

  return (
    <>
      <section className="relative pt-16 lg:pt-20 pb-12 bg-gradient-to-br from-primary via-primary to-[#0d3055] text-white overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <Link
            href="/health-packages"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6"
          >
            <ArrowLeft size={16} /> All Packages
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-accent text-white flex items-center justify-center text-4xl font-bold shrink-0">
              {pkg.badge}
            </div>
            <div className="flex-1">
              <div className="text-accent-soft text-sm font-semibold uppercase tracking-wider mb-1">
                {pkg.subtitle}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold">{pkg.title}</h1>
              <p className="text-white/80 mt-2">{pkg.ideal}</p>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-xs text-accent-soft uppercase tracking-wider">Price</div>
              <div className="text-3xl font-bold">{pkg.price}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-accent-soft border-l-4 border-accent rounded-r-2xl p-5 mb-10">
            <p className="font-sinhala text-foreground/80 leading-relaxed">{pkg.descriptionSi}</p>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-2">Tests Included</h2>
          <p className="text-muted mb-6">{pkg.tests.length} comprehensive tests</p>

          <div className="grid sm:grid-cols-2 gap-3 mb-12">
            {pkg.tests.map((t, i) => (
              <div
                key={i}
                className="bg-surface border border-border rounded-xl p-4 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-accent-soft text-accent flex items-center justify-center shrink-0">
                  <Check size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-primary text-sm">{t.en}</div>
                  <div className="text-sm font-sinhala text-muted mt-0.5">{t.si}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Book This Package</h3>
            <p className="text-white/80 mb-6">
              Visit our laboratory or call us to schedule your health checkup.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <BookingButton className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-full">
                <Calendar size={18} /> Book Appointment
              </BookingButton>
              <a
                href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-white/90"
              >
                <Phone size={18} /> Call {site.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
