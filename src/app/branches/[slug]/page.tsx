import Image from "next/image";
import { notFound } from "next/navigation";
import { 
  MapPin, Phone, Clock, FlaskConical,
  Activity, HeartPulse, ScanLine, TestTubes, Pill, Eye, Ambulance, Hospital, Stethoscope, FileText, Brain, Users, Home, Shield
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { BranchDoctorTable } from "@/components/BranchDoctorTable";
import { branches } from "@/data/branches";

const hanwellaServices = [
  { name: "Emergency Treatment Unit (ETU)", icon: Activity },
  { name: "Outpatient Department (OPD)", hours: "8:00 AM – 11:00 PM", icon: Stethoscope },
  { name: "X-Ray Services", hours: "9:00 AM – 8:00 PM", icon: ScanLine },
  { name: "Laboratory Services", hours: "7:00 AM – 8:00 PM", icon: TestTubes },
  { name: "Pharmacy Services", hours: "7:00 AM – 11:00 PM", icon: Pill },
  { name: "Specialist Doctor Consultation Services", icon: Users },
  { name: "Psychological Counselling", icon: Brain },
  { name: "Homeopathy Clinic", icon: Hospital },
  { name: "Physiotherapy Services", icon: Activity },
  { name: "Family Planning Services", icon: Users },
  { name: "Wound Care / Treatment Unit", icon: Activity },
  { name: "Home Nursing Service", icon: Home },
  { name: "Ultrasound Scanning", icon: ScanLine },
  { name: "Echocardiography", icon: HeartPulse },
  { name: "ECG Services", icon: Activity },
  { name: "Eye Examination", icon: Eye },
  { name: "Ambulance Service", icon: Ambulance },
  { name: "Optical / Spectacles Services", icon: Eye },
  { name: "Health Protection Services", icon: Shield },
  { name: "Mobile Medical Camps", icon: Hospital },
  { name: "Medical Examination Certificates", icon: FileText },
];

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = branches.find((b) => b.slug === slug);
  if (!branch) return {};
  return {
    title: `${branch.name} — Gomez Hospital`,
    description: branch.description,
  };
}

export default async function BranchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const branch = branches.find((b) => b.slug === slug);
  if (!branch) notFound();

  return (
    <>
      <PageHero
        eyebrow="Branch"
        title={branch.name}
        description={branch.description}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden shadow-xl mb-12 aspect-[21/9] relative">
            <Image
              src={branch.image}
              alt={branch.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          {branch.slug === "hanwella" && (
            <div className="mb-12 bg-white border border-accent/20 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm overflow-hidden relative lift">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-soft/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-2 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-primary leading-tight">
                    Outpatient Department (OPD)
                  </h3>
                  <p className="text-muted mt-1.5 text-sm lg:text-base">
                    Open daily from 8:00 AM to 11:00 PM
                  </p>
                </div>
              </div>
              <div className="relative z-10 shrink-0">
                <div className="inline-flex items-center justify-center bg-rose-soft text-rose font-bold px-8 py-3 rounded-full text-lg lg:text-xl shadow-sm border border-rose/10">
                  Open Daily!
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
            <aside className="space-y-6">
              <div className="bg-surface border border-border rounded-2xl p-6">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-accent" /> Contact
                </h3>
                <p className="text-sm text-muted mb-4">{branch.address}</p>
                <div className="space-y-2">
                  {branch.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-primary font-semibold hover:text-accent"
                    >
                      <Phone size={16} /> {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-surface border border-border rounded-2xl p-6">
                <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-accent" /> Operating Hours
                </h3>
                <ul className="space-y-3 text-sm">
                  {branch.hours.map((h) => (
                    <li key={h.label} className="flex justify-between">
                      <span className="text-muted">{h.label}</span>
                      <span className="font-semibold text-primary">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {branch.slug === "hanwella" && (
                <div className="bg-surface border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <Activity size={18} className="text-accent" /> Services Available
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {hanwellaServices.map((service, idx) => {
                      const Icon = service.icon;
                      return (
                        <li key={idx} className="flex justify-between items-start gap-3 py-1.5 border-b border-border/40 last:border-0">
                          <span className="font-medium text-primary flex items-start gap-2.5">
                            <Icon size={16} className="text-accent shrink-0 mt-0.5" /> 
                            {service.name}
                          </span>
                          {service.hours && (
                            <span className="font-semibold text-accent text-xs whitespace-nowrap bg-accent/10 px-1.5 py-0.5 rounded shrink-0">{service.hours.replace(":00 AM", " AM").replace(":00 PM", " PM").replace(" AM – ", "–").replace(" PM", "")}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <div className="bg-surface border border-border rounded-2xl overflow-hidden">
                <div className="p-4 flex items-center gap-2 font-bold text-primary">
                  <FlaskConical size={18} className="text-accent" /> Location
                </div>
                <iframe
                  src={branch.mapEmbed}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </aside>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">Visiting Specialists</h2>
              <p className="text-muted mb-6">
                {branch.doctors.length} specialists visit this branch. Search to find your doctor.
              </p>
              <BranchDoctorTable doctors={branch.doctors} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
