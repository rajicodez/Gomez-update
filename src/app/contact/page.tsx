import { MapPin, Phone, Mail, Clock, Pill, Ambulance } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

type ContactLine = string | { text: string; href: string };

type ContactCard = {
  icon: typeof MapPin;
  title: string;
  lines: ContactLine[];
};

export const metadata = {
  title: "Contact Us — Gomez Hospital",
  description: "Get in touch with Gomez Hospital. Visit, call, or send us a message. Available 24/7 for emergencies.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="We are here to help you 24/7. Reach out via any channel — visit, call, or send us a message."
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {(
              [
                {
                  icon: MapPin,
                  title: "Visit Us",
                  lines: [site.mainAddress],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: site.phones,
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: [site.email],
                },
                {
                  icon: Clock,
                  title: "Hours",
                  lines: ["24/7 Emergency", "Open All Days"],
                },
                {
                  icon: Pill,
                  title: "Pharmacy",
                  lines: [
                    { text: site.pharmacyPhone, href: "tel:0768204915" },
                    "Ground floor · Open 24/7",
                  ],
                },
                {
                  icon: Ambulance,
                  title: "Ambulance",
                  lines: [
                    { text: site.ambulancePhone, href: `tel:${site.ambulancePhone.replace(/\s/g, "")}` },
                    "24/7 Emergency Transport",
                  ],
                },
              ] satisfies ContactCard[]
            ).map((c) => (
              <div key={c.title} className="bg-surface border border-border rounded-2xl p-6 lift">
                <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                  <c.icon size={22} />
                </div>
                <h3 className="font-bold text-primary mb-2">{c.title}</h3>
                {c.lines.map((l) =>
                  typeof l === "string" ? (
                    <div key={l} className="text-sm text-muted">
                      {l}
                    </div>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <Phone size={14} className="text-accent shrink-0" />
                      {l.text}
                    </a>
                  ),
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden border border-border min-h-[400px]">
              <iframe
                src={site.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="bg-surface border border-border rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Send a Message</h3>
              <p className="text-muted mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
