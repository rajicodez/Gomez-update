import { MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { collectingCenters } from "@/data/centers";

export const metadata = {
  title: "Collecting Centers — Gomez Hospital",
  description: "Our island-wide network of sample collecting centers across Sri Lanka.",
};

export default function CentersPage() {
  return (
    <>
      <PageHero
        eyebrow="Sample Collection"
        title="Collecting Centers"
        description="Gomez Laboratory Sample Collecting Center"
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {collectingCenters.map((c) => (
              <div
                key={c.name}
                className="lift bg-white border border-border rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                  <MapPin size={22} />
                </div>
                <h3 className="font-bold text-primary mb-2">{c.name}</h3>
                <address className="not-italic text-sm text-muted leading-relaxed">
                  {c.address.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
                <div className="mt-4 pt-4 border-t border-border space-y-2">
                  {c.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                    >
                      <Phone size={15} className="text-accent" aria-hidden />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
