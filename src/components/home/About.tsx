import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Award, Users2, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassionate Care", desc: "Patient-first approach in everything we do" },
  { icon: Award, title: "Trusted Legacy", desc: "30+ years serving our community" },
  { icon: Users2, title: "Expert Team", desc: "40+ specialist consultants" },
  { icon: Sparkles, title: "Modern Technology", desc: "Advanced medical equipment" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full medical-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md">
            <Image
              src="/images/about_us_4.png"
              alt="Gomez Hospital"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:right-8 w-48 h-48 lg:w-60 lg:h-60 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/2021-05-111.jpg"
              alt="Hospital exterior"
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            About Gomez Hospital
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary leading-[1.1]">
            Three Decades of <br />
            <span className="text-accent">Trusted Care.</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-accent to-accent-2 rounded-full" />

          <p className="mt-8 text-foreground/80 text-lg leading-relaxed">
            Gomez Hospital is the leading private healthcare provider in Avissawella and
            Seethawakapura. Founded in 1986, we are committed to high-quality, patient-centered
            care at optimal rates.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="flex gap-3 p-4 rounded-xl hover:bg-surface transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
                  <v.icon size={20} />
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{v.title}</div>
                  <div className="text-xs text-muted mt-0.5">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 mt-8 text-primary hover:text-accent font-semibold border-b-2 border-accent pb-1 transition-all"
          >
            Discover Our Story <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
