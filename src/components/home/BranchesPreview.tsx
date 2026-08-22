import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { branches } from "@/data/branches";

export function BranchesPreview() {
  return (
    <section
      id="branches"
      className="relative py-24 bg-accent-soft overflow-hidden"
    >
      <div className="absolute inset-0 medical-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Where To Find Us
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
            Our Branches,
            <br />
            <span className="text-accent">One Promise of Care</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {branches.map((b) => (
            <Link
              key={b.slug}
              href={`/branches/${b.slug}`}
              className="group relative bg-white border border-border rounded-3xl overflow-hidden hover:border-accent/40 transition-all shadow-sm lift"
            >
              <div className="aspect-[16/10] relative">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(min-width: 768px) 672px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 bg-white/95 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {b.shortName}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">{b.name}</h3>
                <div className="space-y-2 text-sm text-muted mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{b.address}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone size={16} className="text-accent shrink-0 mt-0.5" />
                    <span>{b.phones.join(" · ")}</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all pt-3 border-t border-border w-full justify-between">
                  Visit Branch Page <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
