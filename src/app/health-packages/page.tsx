import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { healthPackages } from "@/data/packages";

export const metadata = {
  title: "Health Packages — Gomez Hospital",
  description: "Comprehensive health checkup packages: General, Cardiac, Diabetic and Elder care. Click each for full details.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Health Checkups"
        title="Health Packages"
        description="Comprehensive health checkup solutions for everyone — from general screening to specialised cardiac and diabetic care."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthPackages.map((p) => (
              <Link
                key={p.id}
                href={`/health-packages/${p.id}`}
                className="group lift bg-white border border-border rounded-2xl p-6 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-accent text-white flex items-center justify-center text-2xl font-bold shrink-0">
                    {p.badge}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary leading-tight">{p.title}</h3>
                    <p className="text-sm text-accent font-medium mt-0.5">{p.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-muted mb-3">{p.ideal}</p>
                <p className="text-xs font-sinhala text-foreground/70 mb-4 line-clamp-2">
                  {p.descriptionSi}
                </p>

                <div className="flex items-center gap-2 text-xs text-muted mb-4 pt-4 border-t border-border">
                  <Check size={14} className="text-success" />
                  {p.tests.length} tests included
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{p.price}</span>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
