import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { DoctorList } from "@/components/DoctorList";
import { doctors, specialties } from "@/data/doctors";

export const metadata = {
  title: "Meet The Specialist — Gomez Hospital",
  description: "40+ renowned consultants offering specialized care. Search and find your doctor by name or specialty.",
};

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
