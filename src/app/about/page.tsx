import Image from "next/image";
import { Eye, Target, User } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "About Us — Gomez Hospital",
  description: "Founded in 1986 by Dr. R. P. Weerasinghe. Excellence in healthcare for over 30 years.",
};

const directors: {
  name: string;
  role: string;
  subtitle?: string;
  affiliation?: string;
  image?: string;
  qualifications?: string[];
}[] = [
  {
    name: "Dr. R. P. Weerasinghe",
    role: "Chairman",
    subtitle: "Family Physician",
    qualifications: ["MBBS, DFM, MCGP"],
    image: "/images/chairman 1.jpg",
  },
  {
    name: "Dr. Sandamali Weerasinghe",
    role: "Managing Director",
    qualifications: ["MBBS DFM MCGP", "Reg.24488", "MBA (Hospital & Health Services)"],
    image: "/images/managing.jpeg",
  },
  {
    name: "Mrs. Diana Weerasinghe",
    role: "Director",
    image: "/images/diana .png",
  },
  {
    name: "Dr. Chathura Weerasinghe",
    role: "Managing Director",
    affiliation: "Winlanka Hospital (Pvt) Ltd, Nugegoda",
    image: "/images/chathura.jpeg",
  },
];

const management = [
  { name: "Dr. Jayasekara", role: "General Manager", image: "" },
  { name: "—", role: "Operations Manager", image: "" },
  { name: "—", role: "HR Manager", image: "" },
];

const additionalManagement = [
  { name: "Management Member 1", role: "Management Team", description: "Placeholder description for management team member.", image: "" },
  { name: "Management Member 2", role: "Management Team", description: "Placeholder description for management team member.", image: "" },
  { name: "Management Member 3", role: "Management Team", description: "Placeholder description for management team member.", image: "" },
  { name: "Management Member 4", role: "Management Team", description: "Placeholder description for management team member.", image: "" },
  { name: "Management Member 5", role: "Management Team", description: "Placeholder description for management team member.", image: "" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        description="Gomez Hospital Pvt Ltd is the leading private healthcare provider in Avissawella and Seethawakapura, delivering exceptional medical services for over 30 years."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Our History</h2>
            <div className="section-underline" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-foreground/85 leading-relaxed">
              <p>
                Founded in 1986 as a nursing home, Gomez Hospital was established by{" "}
                <strong className="text-primary">Dr. R. P. Weerasinghe</strong>, our esteemed
                Chairman. After retiring as the Medical Officer of Health (MOH) of Eheliyagoda, he
                devoted himself to family medicine, launching the first private nursing home and
                family clinic in Seethawakapura.
              </p>
              <p>
                In 1999, Gomez Hospital was officially registered with the Ministry of Health and is
                now a recognized member of the Private Health Regulatory Council. As the pioneer
                private hospital in the region, we have established ourselves as the undisputed
                market leader, committed to offering high-quality, patient-centered care at optimal
                rates.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/about_us_img.png"
                alt="Gomez Hospital history"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 border border-border lift">
            <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-4">
              <Eye size={26} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
            <p className="text-muted leading-relaxed">
              To be the leading private healthcare provider in Seethawakapura, delivering
              compassionate, high-quality, and innovative medical care, ensuring excellence in
              patient well-being and community health.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-border lift">
            <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-4">
              <Target size={26} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
            <p className="text-muted leading-relaxed">
              Our mission is to provide high-quality, affordable, and patient-centered healthcare by
              integrating advanced medical technology, skilled professionals, and compassionate
              service. We are committed to continuous improvement, ensuring excellence in medical
              care, patient safety, and community well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Board of Directors</h2>
            <div className="section-underline" />
            <p className="text-muted">The visionaries guiding our path.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((d) => (
              <div
                key={d.name}
                className="lift bg-white border border-border rounded-2xl overflow-hidden"
              >
                <div className="aspect-square relative bg-surface-2">
                  {d.image ? (
                    <Image src={d.image} alt={d.name} fill className="object-cover" sizes="25vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted">
                      <User size={64} />
                    </div>
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-primary">{d.name}</h3>
                  {d.role && (
                    <p className="text-base font-semibold text-accent mt-1.5">{d.role}</p>
                  )}
                  {d.subtitle && (
                    <p className="text-sm text-primary mt-1">{d.subtitle}</p>
                  )}
                  {d.affiliation && (
                    <p className="text-sm text-muted mt-1 leading-relaxed">{d.affiliation}</p>
                  )}
                  {d.qualifications && d.qualifications.length > 0 && (
                    <ul className="mt-2.5 space-y-0.5 text-xs text-muted leading-relaxed">
                      {d.qualifications.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Management Team</h2>
            <div className="section-underline" />
            <p className="text-muted mt-4">
              Meet the team leading Gomez Hospital with care, experience, and commitment.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {management.map((m, i) => (
              <div
                key={i}
                className="lift bg-white border border-border rounded-2xl overflow-hidden"
              >
                <div className="aspect-square relative bg-surface-2 flex items-center justify-center text-muted">
                  {m.image ? (
                    <Image src={m.image} alt={m.name} fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
                  ) : (
                    <User size={64} />
                  )}
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-primary">{m.name}</h3>
                  <p className="text-sm text-muted mt-1">{m.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-6xl mx-auto mt-12">
            {additionalManagement.map((m, i) => (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-[340px] lift bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="aspect-square relative bg-surface-2 flex items-center justify-center text-muted/30">
                  {m.image ? (
                    <Image src={m.image} alt={m.name} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 50vw" />
                  ) : (
                    <User size={80} strokeWidth={1} />
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-lg text-primary">{m.name}</h3>
                  <p className="text-sm font-semibold text-accent mt-1">{m.role}</p>
                  {m.description && (
                    <p className="text-sm text-muted mt-3 leading-relaxed">{m.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
