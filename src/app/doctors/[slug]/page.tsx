import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Stethoscope,
  Building,
  Calendar,
  GraduationCap,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { BreadcrumbJsonLd, JsonLd } from "@/components/JsonLd";
import { BookingButton } from "@/components/BookingButton";
import { site } from "@/data/site";
import {
  doctors,
  getDoctorBySlug,
  getDoctorSlug,
  getSpecialtyDisplayName,
  isConfirmedHospital,
  isConfirmedSchedule,
} from "@/data/doctors";
import { canonicalUrl, createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return doctors.map((doctor) => ({
    slug: getDoctorSlug(doctor),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const displaySpecialty = getSpecialtyDisplayName(doctor.specialty);
  const title = `${doctor.name} – ${displaySpecialty} | Gomez Hospital`;
  const description = `Consult with ${doctor.name}, specialist ${displaySpecialty} at Gomez Hospital Avissawella. View consultation details and book channeling appointments.`;

  return createPageMetadata({
    title,
    description,
    path: `/doctors/${slug}`,
  });
}

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  const displaySpecialty = getSpecialtyDisplayName(doctor.specialty);
  const hasConfirmedAffiliation = isConfirmedHospital(doctor.hospital);
  const hasConfirmedClinic = isConfirmedSchedule(doctor.clinicDays);
  const isFemale = doctor.gender === "female";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${canonicalUrl(`/doctors/${slug}`)}#doctor`,
    name: doctor.name,
    url: canonicalUrl(`/doctors/${slug}`),
    jobTitle: displaySpecialty,
    description: `${doctor.name} is a consultant ${displaySpecialty} channeling at Gomez Hospital Avissawella.`,
    ...(hasConfirmedAffiliation
      ? {
          affiliation: {
            "@type": "Organization",
            name: doctor.hospital,
          },
        }
      : {}),
    ...(doctor.credentials && doctor.credentials.length > 0
      ? {
          hasCredential: doctor.credentials.map((cred) => ({
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "degree",
            name: cred,
          })),
        }
      : {}),
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Doctors", path: "/doctors" },
          { name: doctor.name, path: `/doctors/${slug}` },
        ]}
      />
      <JsonLd data={personJsonLd} />

      {/* Hero Header */}
      <section className="relative pt-12 pb-14 bg-gradient-to-br from-primary via-primary to-[#0d3055] text-white overflow-hidden">
        <div className="absolute inset-0 medical-pattern opacity-25" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-6 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Doctors</span>
          </Link>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div
              className={`w-24 h-24 rounded-3xl flex items-center justify-center shrink-0 shadow-xl ${
                isFemale
                  ? "bg-gradient-to-br from-rose to-pink-400 text-white"
                  : "bg-gradient-to-br from-accent to-accent-2 text-white"
              }`}
            >
              <Stethoscope size={44} />
            </div>

            <div className="flex-1 min-w-0">
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                  isFemale ? "bg-rose-soft text-rose" : "bg-accent-soft text-accent"
                }`}
              >
                {displaySpecialty}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2">
                {doctor.name}
              </h1>
              <p className="mt-3 text-base text-white/85 max-w-2xl leading-relaxed">
                Specialist {displaySpecialty} available for channeled consultations at Gomez
                Hospital in Avissawella.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-surface/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content Area (2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Credentials / Affiliation Card */}
              <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2.5 mb-5 pb-4 border-b border-border">
                  <GraduationCap className="text-accent shrink-0" size={24} />
                  <span>Professional Details</span>
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                      Specialty
                    </h3>
                    <p className="text-base font-semibold text-primary">{displaySpecialty}</p>
                  </div>

                  {doctor.credentials && doctor.credentials.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                        Qualifications & Degrees
                      </h3>
                      <ul className="space-y-1.5">
                        {doctor.credentials.map((c) => (
                          <li
                            key={c}
                            className="text-sm text-foreground flex items-center gap-2"
                          >
                            <ShieldCheck size={16} className="text-accent shrink-0" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                      Hospital Affiliation
                    </h3>
                    {hasConfirmedAffiliation ? (
                      <div className="flex items-start gap-2.5 text-sm text-foreground">
                        <Building size={16} className="text-muted shrink-0 mt-0.5" />
                        <span>{doctor.hospital}</span>
                      </div>
                    ) : (
                      <p className="text-sm text-muted">
                        Please contact Gomez Hospital to confirm consultation availability and
                        hospital affiliation.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Consultation Schedule Card */}
              <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2.5 mb-5 pb-4 border-b border-border">
                  <Calendar className="text-accent shrink-0" size={22} />
                  <span>Channeling Schedule</span>
                </h2>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                    Consultation Days & Times
                  </h3>
                  {hasConfirmedClinic ? (
                    <div className="bg-surface border border-border rounded-2xl p-4">
                      <p className="text-base font-semibold text-primary">
                        {doctor.clinicDays}
                      </p>
                      <p className="text-xs text-muted mt-2">
                        Consultation days and times are subject to specialist availability and
                        advance booking. Please call to confirm your appointment time.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-surface border border-border rounded-2xl p-4">
                      <p className="text-sm text-foreground font-medium">
                        Please contact Gomez Hospital to confirm consultation availability.
                      </p>
                      <p className="text-xs text-muted mt-1.5">
                        Our channeling desk will provide the latest visiting dates, clinic times,
                        and appointment numbers for {doctor.name}.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-border flex items-start gap-3 text-xs text-muted">
                  <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-primary">Consultation Location: </span>
                    Gomez Hospital, {site.mainAddress}
                  </div>
                </div>
              </div>

              {/* Channeling Info Card */}
              <div className="bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-3">
                  Consultation & Hospital Services
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Gomez Hospital Avissawella provides private doctor channeling with fully
                  supported diagnostic and clinical facilities. Diagnostic tests, imaging, and
                  prescriptions recommended by {doctor.name} can be completed on-site via our
                  laboratory, pharmacy, and diagnostic departments.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href={`/doctors?specialty=${encodeURIComponent(doctor.specialty)}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface hover:bg-accent-soft text-primary hover:text-accent border border-border transition-colors font-medium"
                  >
                    All {displaySpecialty} Consultants &rarr;
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface hover:bg-accent-soft text-primary hover:text-accent border border-border transition-colors font-medium"
                  >
                    Hospital Services &rarr;
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-surface hover:bg-accent-soft text-primary hover:text-accent border border-border transition-colors font-medium"
                  >
                    Contact & Directions &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Booking Card */}
            <div className="space-y-6">
              <div className="bg-white border border-border rounded-3xl p-6 shadow-sm sticky top-24">
                <div className="w-12 h-12 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                  <Calendar size={24} />
                </div>
                <h2 className="text-xl font-bold text-primary mb-1">Book an Appointment</h2>
                <p className="text-xs text-muted mb-6 leading-relaxed">
                  Call our channeling desk or book through WhatsApp to reserve your consultation
                  number.
                </p>

                <div className="space-y-3">
                  <BookingButton className="w-full justify-center bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-5 rounded-2xl shadow-sm transition-all text-sm flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Book Appointment</span>
                  </BookingButton>

                  <a
                    href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                    className="w-full flex items-center justify-center gap-2 bg-surface hover:bg-accent-soft border border-border hover:border-accent text-primary font-semibold py-3 px-5 rounded-2xl transition-all text-sm"
                  >
                    <Phone size={16} className="text-accent" />
                    <span>Call {site.phones[0]}</span>
                  </a>

                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/30 text-primary font-semibold py-3 px-5 rounded-2xl transition-all text-sm"
                  >
                    <MessageCircle size={16} className="text-[#25d366]" />
                    <span>WhatsApp Booking</span>
                  </a>
                </div>

                <div className="mt-6 pt-5 border-t border-border space-y-2 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-accent shrink-0" />
                    <span>24/7 Hospital Services</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-accent shrink-0" />
                    <span>Avissawella Main Hospital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
