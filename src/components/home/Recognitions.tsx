import { ShieldCheck, Award, Building2, BadgeCheck, Stethoscope } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Ministry of Health",
    sub: "Officially registered",
  },
  {
    icon: Award,
    title: "Private Health Council",
    sub: "Recognized member",
  },
  {
    icon: BadgeCheck,
    title: "30+ Years",
    sub: "Proven track record",
  },
  {
    icon: Stethoscope,
    title: "40 Specialists",
    sub: "Multi-disciplinary team",
  },
  {
    icon: Building2,
    title: "Regional Leader",
    sub: "Avissawella & Seethawakapura",
  },
];

export function Recognitions() {
  return (
    <section className="py-14 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-2">
            Trusted & Recognized
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-primary">
            A Legacy Built on Trust
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="flex flex-col items-center gap-2 text-center px-4 py-5 rounded-2xl bg-surface/60 hover:bg-accent-soft transition-colors w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-auto lg:flex-1"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-accent shadow-sm">
                <it.icon size={22} />
              </div>
              <div className="font-bold text-primary text-sm leading-tight">{it.title}</div>
              <div className="text-[11px] text-muted">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
