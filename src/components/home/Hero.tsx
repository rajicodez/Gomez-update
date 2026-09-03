import Image from "next/image";
import { Phone, Calendar, Stethoscope } from "lucide-react";
import { site } from "@/data/site";
import { BookingButton } from "@/components/BookingButton";

const trustStats = [
  { value: "35+", label: "Years" },
  { value: "40+", label: "Specialists" },
  { value: "24/7", label: "Open", icon: Stethoscope },
];

export function Hero() {
  return (
    <section className="relative -mt-16 lg:-mt-20 h-[calc(100svh+3rem-2.25rem)] lg:h-[calc(100svh+4rem-2.25rem)] min-h-[680px] flex items-center pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-x-clip bg-white">
      {/* Full-bleed hero image — extends behind transparent navbar */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_test.png"
          alt="Gomez Hospital"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[85%_top] lg:object-right-top"
        />
        {/* Desktop: left-to-right fade keeps text readable */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white from-35% via-white/40 via-50% to-transparent to-60%" />
        {/* Mobile: light wash + bottom-to-top fade so doctor stays visible behind text */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-white via-white/85 via-45% to-white/20" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 items-center">
        {/* LEFT — Text */}
        <div className="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-[0.95] tracking-tight">
            We Care
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-accent">Always!</span>
              <span className="absolute bottom-1 left-0 right-0 h-2.5 lg:h-3 bg-accent-tint -z-0" />
            </span>
          </h1>

          <p className="mt-2 text-base lg:text-xl font-semibold text-accent/80 font-sinhala">
           අපි සැමදා ඔබ සමඟයි
          </p>

          <p className="mt-4 text-sm lg:text-base text-muted max-w-xl leading-relaxed">
          Gomez Hospital Pvt Ltd, in Avissawella, is the pioneer private hospital in Seethawakapura. 
          We are the undisputed market leader in the private healthcare sector in the region for over 30 years.

          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <BookingButton className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 rounded-full transition-all shadow-xl shadow-primary/30 text-sm lg:text-base">
              <Calendar size={16} />
              Book Appointment
            </BookingButton>
            <a
              href={`tel:${site.phones[0].replace(/\s/g, "")}`}
              className="group inline-flex items-center gap-2 bg-white border-2 border-primary/10 hover:border-accent text-primary font-bold px-6 py-3 rounded-full transition-all text-sm lg:text-base"
            >
              <div className="w-6 h-6 rounded-full bg-rose-soft text-rose flex items-center justify-center group-hover:bg-rose group-hover:text-white transition-colors">
                <Phone size={12} />
              </div>
              {site.phones[0]}
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-8 pt-6 border-t border-border/70 grid grid-cols-3 gap-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-2xl lg:text-3xl font-bold text-primary leading-none group-hover:text-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] lg:text-xs text-muted mt-1 uppercase tracking-wider flex items-center gap-1">
                  {stat.icon && (
                    <stat.icon size={12} className="text-accent shrink-0" aria-hidden />
                  )}
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
