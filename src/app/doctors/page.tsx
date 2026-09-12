import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { DoctorList } from "@/components/DoctorList";
import { doctors, specialties } from "@/data/doctors";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Doctors in Avissawella | Gomez Hospital Specialist Channeling",
  description:
    "Find specialist doctors at Gomez Hospital Avissawella by name or specialty and book a channeling appointment for trusted medical care.",
  path: "/doctors",
});

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet The Specialist"
        description="Book your appointment to channel your specialist today"
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Suspense fallback={<div className="text-center py-16 text-muted">Loading...</div>}>
            <DoctorList doctors={doctors} specialties={specialties} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
