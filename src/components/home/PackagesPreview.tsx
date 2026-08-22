import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { healthPackages } from "@/data/packages";

const gradient = "from-accent to-accent-2";
const previewPackages = healthPackages.slice(0, 6);

export function PackagesPreview() {
  return (
    <section
      id="packages"
      className="relative py-24 bg-surface overflow-hidden"
    >
      <div className="absolute inset-0 medical-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              Health Checkups
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
              Take Charge of <br />
              Your <span className="text-accent">Health</span>
            </h2>
          </div>
          <p className="text-muted max-w-md text-base lg:text-right">
            From basic screening to specialised cardiac and diabetic packages. Tap any card for the
            full bilingual test list.
          </p>
        </div>

        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden max-h-[26rem] sm:max-h-[28rem] lg:max-h-[30rem]">
            {previewPackages.map((p) => (
              <Link
                key={p.id}
                href={`/health-packages/${p.id}`}
                className="group relative lift bg-white rounded-3xl overflow-hidden border border-border flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${gradient}`} />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} text-white flex items-center justify-center text-2xl font-bold shadow-md`}
                    >
                      {p.badge}
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted uppercase tracking-wider">From</div>
                      <div className="text-2xl font-bold text-primary leading-none">
                        {p.price.replace("Rs. ", "Rs.")}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-bold text-primary text-lg leading-tight">{p.title}</h3>
                  <p className="text-sm font-semibold text-accent mt-0.5">{p.subtitle}</p>
                  <p className="text-sm text-muted mt-3 flex-1">{p.ideal}</p>

                  <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <Check size={14} className="text-success" />
                      {p.tests.length} tests
                    </span>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all">
                      Details <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div
            className="absolute inset-x-0 bottom-0 h-36 sm:h-40 bg-gradient-to-t from-surface via-surface/80 to-transparent pointer-events-none"
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center px-4 pb-1 sm:pb-2">
            <Link
              href="/health-packages"
              className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all shadow-md"
            >
              View All Packages <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
