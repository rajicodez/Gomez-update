import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-primary text-white/90 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/images/gomez_logo_.png"
              alt="Gomez Hospital"
              width={64}
              height={64}
              className="h-14 w-auto bg-white rounded-md p-1 mb-4"
            />
            <p className="text-sm leading-relaxed text-white/70 mb-6">
              Your trusted partner in healthcare, providing world-class medical services with a
              personal touch. Excellence in patient care since {site.established}.
            </p>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/gomezhospital.lk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:scale-110 flex items-center justify-center transition-all duration-200 text-white hover:text-white"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:scale-110 flex items-center justify-center transition-all duration-200 text-white hover:text-white"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/doctors", label: "Find a Doctor" },
                { href: "/health-packages", label: "Health Packages" },
                { href: "/promotion", label: "Promotion" },
                { href: "/event", label: "Event" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Our Branches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/branches/hanwella"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Hanwella Medical Center
                </Link>
              </li>
              <li>
                <Link
                  href="/collecting-centers"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Collecting Centers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-accent" />
                <span>{site.mainAddress}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 mt-0.5 text-accent" />
                <div className="flex flex-col">
                  {site.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 mt-0.5 text-accent" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="shrink-0 mt-0.5 text-accent" />
                <span>24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Gomez Hospital Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
