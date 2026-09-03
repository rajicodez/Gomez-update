import Image from "next/image";
import { Check, UserRound, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/services";
export const metadata = {
  title: "Services — Gomez Hospital",
  description: "Comprehensive medical services: specialist consultations, inpatient care, emergency, surgery, maternity, diagnostics and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        description="Comprehensive medical care delivered with compassion and advanced technology, 24 hours a day."
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20">
          {services.map((s, idx) => (
            <article
              key={s.slug}
              id={s.slug}
              className={`grid lg:grid-cols-2 gap-10 items-center scroll-mt-24 ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] relative">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                  <s.icon size={26} />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-3 flex flex-wrap items-center gap-3">
                  <span>{s.title}</span>
                  {(s.title === "Pharmacy Services" || s.title === "24 Hours Services (OPD)" || s.title === "Laboratory Services") && (
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-accent text-white px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
                      24 / 7
                    </span>
                  )}
                </h2>
                <p className="text-muted mb-6 leading-relaxed">{s.description}</p>

                {s.doctors && s.doctors.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                      Available Doctors
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {s.doctors.map((doctor) => (
                        <li
                          key={doctor}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium text-primary"
                        >
                          <UserRound size={14} className="text-accent shrink-0" />
                          {doctor}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                  Key Services
                </h3>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check size={18} className="text-accent shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-surface border-l-4 border-accent px-4 py-3 rounded">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                    Contact & Info
                  </div>
                  <p className="text-sm text-muted">{s.contact}</p>
                  {(() => {
                    const phoneList = s.phones || (s.phone ? [s.phone] : [{
                      label: "Direct",
                      display: "036 2222 324",
                      tel: "0362222324",
                    }]);
                    return (
                      <div className="flex flex-col gap-1.5 mt-2">
                        {phoneList.map((p, i) => (
                          <a
                            key={i}
                            href={`tel:${p.tel}`}
                            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors group"
                          >
                            <Phone size={14} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                            <span>{p.label}:</span>
                            <span className="text-base font-bold text-accent group-hover:text-accent-2 transition-colors ml-0.5">
                              {p.display}
                            </span>
                          </a>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </>
  );
}
