import { MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/data/site";

export function HomeContact() {
  return (
    <section className="py-14 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">Contact Us</h2>
          <div className="section-underline" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Visit Us */}
          <a 
            href={site.mapEmbed} // If it's an embed URL, it's safer to just provide text, or a maps link. Let's provide a generic maps link or just no link for the whole card, but maybe link the text.
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 lg:p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md lift transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <MapPin size={26} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Visit Us</h3>
            <p className="text-muted leading-relaxed max-w-[250px]">
              {site.mainAddress}
            </p>
          </a>

          {/* Call Us */}
          <a 
            href={`tel:${site.phones[0].replace(/\s/g, "")}`}
            className="flex flex-col items-center text-center p-6 lg:p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md lift transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Phone size={26} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Call Us</h3>
            <p className="text-muted leading-relaxed font-medium">
              {site.phones[0]}
            </p>
          </a>

          {/* Email Us */}
          <a 
            href={`mailto:${site.email}`}
            className="flex flex-col items-center text-center p-6 lg:p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md lift transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <Mail size={26} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
            <p className="text-muted leading-relaxed">
              {site.email}
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}
