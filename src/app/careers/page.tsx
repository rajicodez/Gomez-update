import Link from "next/link";
import {
  Stethoscope,
  Activity,
  TestTubes,
  Pill,
  Users2,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Heart,
  GraduationCap,
  Clock3,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata = {
  title: "Careers — Gomez Hospital",
  description:
    "Join our team at Gomez Hospital. Explore career opportunities for doctors, nurses, lab technicians and support staff.",
};

const openings = [
  {
    icon: Users2,
    title: "Receptionist",
    requirements: [
      "G.C.E. A/L qualification",
      "Good communication and interpersonal skills",
      "Basic computer literacy",
      "Pleasant personality with a customer-focused attitude",
    ],
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: TestTubes,
    title: "Phlebotomist",
    requirements: [
      "Qualification in Nursing",
      "Previous experience in blood collection will be an added advantage",
      "Good patient-handling and communication skills",
      "Ability to work responsibly and maintain proper safety standards",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Briefcase,
    title: "Secretary",
    requirements: [
      "G.C.E. A/L qualification",
      "Good written and verbal communication skills",
      "Computer literacy and proficiency in MS Office",
      "Excellent organizational and interpersonal skills",
    ],
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Activity,
    title: "Maintenance Assistant",
    requirements: [
      "Should have studied at a Technical College at a basic level",
      "Basic knowledge of maintenance and repair work",
      "Ability to handle general maintenance duties responsibly",
      "Previous experience will be an added advantage",
    ],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Stethoscope,
    title: "Channeling Nurse",
    requirements: [
      "Qualified Nurse with relevant professional qualifications",
      "Previous experience in a hospital / channeling environment will be an added advantage",
      "Good patient-care and communication skills",
    ],
    color: "from-rose to-pink-500",
  },
];

const benefits = [
  { icon: Heart, title: "Patient-First Culture", desc: "Work where compassion truly matters." },
  { icon: GraduationCap, title: "Training & Growth", desc: "Continuous learning opportunities." },
  { icon: Users2, title: "Supportive Team", desc: "Join a 30+ year legacy of teamwork." },
  { icon: Clock3, title: "Flexible Shifts", desc: "Schedules that respect your life." },
];

const careersEmail = "gomezhospital.careers@gmail.com";
const careersPhone = "+94 74 202 8741";

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Our Team"
        title="Build Your Career With Us"
        description="At Gomez Hospital, we're more than colleagues — we're a family committed to caring for our community. Explore opportunities to grow with Sri Lanka's most trusted regional hospital."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start mb-20">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-[#0d3055] text-white p-8 lg:p-10 overflow-hidden relative">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-accent-2 flex items-center justify-center mb-6">
                  <Briefcase size={26} />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent-2 mb-3">
                  Careers at Gomez
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">Working with Us</h2>
                <p className="mt-5 text-xl font-semibold text-white/95">
                  Your journey with Gomez starts here.
                </p>
                <p className="mt-2 text-white/75">Join us. Grow with us. Care Always.</p>
              </div>
            </div>

            <div className="text-muted leading-relaxed space-y-5 lg:py-3">
              <p>
                At Gomez Hospital, <strong className="text-primary">We Care Always</strong>—for
                our patients, our team, and the community we serve. We believe our people are our
                greatest strength and are committed to creating a supportive environment where
                every individual can learn, grow, and build a rewarding career.
              </p>
              <p>
                As we continue to grow, we welcome passionate, dedicated, and talented individuals
                to join the Gomez team and contribute to delivering quality healthcare with care
                and excellence.
              </p>
              <p>
                Explore our available career opportunities under the <strong className="text-primary">Vacancies</strong>{" "}
                section and take the next step in your career with Gomez Hospital.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`mailto:${careersEmail}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-soft text-primary hover:text-accent font-semibold px-5 py-3 transition-colors"
                >
                  <Mail size={17} className="text-accent" />
                  {careersEmail}
                </a>
                <a
                  href="tel:+94742028741"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-soft text-primary hover:text-accent font-semibold px-5 py-3 transition-colors"
                >
                  <Phone size={17} className="text-accent" />
                  +94 74 202 8741
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              Why Gomez
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              A Place Where Careers Grow
            </h2>
            <div className="section-underline" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white border border-border rounded-2xl p-6 text-center lift"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                  <b.icon size={24} />
                </div>
                <h3 className="font-bold text-primary mb-2">{b.title}</h3>
                <p className="text-sm text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              Vacancies
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">Current Openings</h2>
            <div className="section-underline" />
            <p className="text-muted">
              We&apos;re always looking for talented, caring people. Don&apos;t see your role?
              Send us your CV anyway.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group bg-white border border-border hover:border-accent/40 rounded-3xl overflow-hidden lift flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${job.color}`} />
                <div className="p-6 flex-1 flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} text-white flex items-center justify-center mb-4 shadow-md`}
                  >
                    <job.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{job.title}</h3>
                  <ul className="text-sm text-muted flex-1 space-y-1.5 list-disc pl-4 marker:text-accent/50">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  <a
                    href="mailto:gomezhospital.careers@gmail.com?subject=Job%20Application%20-%20Gomez%20Hospital"
                    className="inline-flex items-center gap-2 mt-5 text-accent font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Apply Now <Mail size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl bg-gradient-to-br from-primary to-[#0d3055] text-white p-8 lg:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
            <div className="relative">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent-2 mb-3">
                How To Apply
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Send Us Your CV
              </h2>
              <p className="text-white/85 mb-8 max-w-xl">
                Email your CV and cover letter mentioning the position you&apos;re applying for.
                Our HR team will get back to shortlisted candidates within 7–10 working days.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={`mailto:${careersEmail}?subject=Career%20Application`}
                  className="group flex items-start gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-2 text-white flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-accent-2">
                      Email
                    </div>
                    <div className="font-semibold text-sm break-all">{careersEmail}</div>
                  </div>
                </a>
                <a
                  href="tel:0742028741"
                  className="group flex items-start gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-2 text-white flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-accent-2">
                      HR Hotline
                    </div>
                    <div className="font-semibold text-sm">{careersPhone}</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm">
                <MapPin size={18} className="text-accent-2 shrink-0 mt-0.5" />
                <div>
                  <strong>Walk-in applications welcome</strong> at our main hospital:{" "}
                  {site.mainAddress}. Please ask for the HR department.
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent"
            >
              Have questions? Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
