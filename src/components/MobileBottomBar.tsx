"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Calendar, MapPin, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { BookingButton } from "@/components/BookingButton";

export function MobileBottomBar() {
  // hide on bottom-anchored pages? — for now show everywhere on mobile only
  const [hidden] = useState(false);
  if (hidden) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-border shadow-[0_-8px_24px_-12px_rgba(10,37,64,0.2)]">
      <div className="grid grid-cols-4 text-center">
        <a
          href={`tel:${site.phones[0].replace(/\s/g, "")}`}
          className="flex flex-col items-center gap-1 py-2.5 text-primary hover:bg-surface"
        >
          <Phone size={18} className="text-rose" />
          <span className="text-[10px] font-semibold">Call</span>
        </a>
        <BookingButton className="flex flex-col items-center gap-1 py-2.5 text-primary hover:bg-surface">
          <Calendar size={18} className="text-accent" />
          <span className="text-[10px] font-semibold">Book</span>
        </BookingButton>
        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 py-2.5 text-primary hover:bg-surface"
        >
          <MapPin size={18} className="text-accent-2" />
          <span className="text-[10px] font-semibold">Locate</span>
        </Link>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-2.5 text-primary hover:bg-surface"
        >
          <MessageCircle size={18} className="text-[#25d366]" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
