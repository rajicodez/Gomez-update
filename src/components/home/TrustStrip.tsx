import { Pill, FlaskConical, Stethoscope } from "lucide-react";

const items = [
  { icon: Stethoscope, title: "Expert Specialists", sub: "40+ consultants" },
  { icon: FlaskConical, title: "Modern Diagnostics", sub: "Digital X-Ray & USS" },
  { icon: Pill, title: "Round-the-clock", sub: "Pharmacy & Lab" },
];

export function TrustStrip() {
  return (
    <section className="relative bg-white -mt-16 lg:-mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white shadow-[0_25px_70px_-20px_rgba(10,37,64,0.2)] border border-border overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {items.map((it) => (
              <div key={it.title} className="p-6 flex items-center gap-4 hover:bg-accent-soft/40 transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-white flex items-center justify-center shrink-0 shadow-md shadow-accent/30">
                  <it.icon size={24} />
                </div>
                <div>
                  <div className="font-bold text-primary text-base lg:text-lg">{it.title}</div>
                  <div className="text-xs lg:text-sm text-muted">{it.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
