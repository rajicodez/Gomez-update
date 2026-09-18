import { BreadcrumbJsonLd, JsonLd } from "@/components/JsonLd";
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
      <BreadcrumbJsonLd items={[{ name: "Doctors", path: "/doctors" }]} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ItemList",
        name: "Gomez Hospital specialist doctors",
        itemListElement: doctors.map((doctor, index) => ({
          "@type": "ListItem", position: index + 1,
          item: {
            "@type": "Person", name: doctor.name, jobTitle: doctor.specialty,
            affiliation: { "@type": "Organization", name: doctor.hospital },
            description: [doctor.specialty, ...(doctor.credentials ?? []),
              "Consultations at Gomez Hospital Avissawella: " + doctor.clinicDays].join(". "),
          },
        })),
      }} />
      <PageHero
        eyebrow="Our Team"
        title="Meet The Specialist"
        description="Book your appointment to channel your specialist today"
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <DoctorList doctors={doctors} specialties={specialties} />
        </div>
      </section>
    </>
  );
}
