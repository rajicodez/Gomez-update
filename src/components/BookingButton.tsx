"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Phone, X, MessageCircle, Calendar, Clock3 } from "lucide-react";
import { site } from "@/data/site";

type Props = {
  children: ReactNode;
  className?: string;
};

export function BookingButton({ children, className }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const modal = (
    <div
      className="fixed inset-0 z-[60] overflow-y-auto flex items-start sm:items-center justify-center p-4 bg-primary/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface text-muted hover:bg-surface-2 flex items-center justify-center z-10"
        >
          <X size={18} />
        </button>

        <div className="bg-gradient-to-br from-primary to-[#0d3055] text-white px-7 py-8">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <Calendar size={26} className="text-accent-2" />
          </div>
          <h3 className="text-2xl font-bold mb-1">Book an Appointment</h3>
          <p className="text-sm text-white/80">
            Call us directly to schedule your visit — our team will help you choose the right
            specialist and time.
          </p>
        </div>

        <div className="px-7 py-6 space-y-3">
          {site.phones.map((p) => (
            <a
              key={p}
              href={`tel:${p.replace(/\s/g, "")}`}
              className="group flex items-center justify-between gap-3 bg-surface hover:bg-accent-soft border border-border hover:border-accent rounded-2xl px-5 py-4 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted">
                    Call Now
                  </div>
                  <div className="text-lg font-bold text-primary leading-tight">{p}</div>
                </div>
              </div>
              <span className="text-accent font-semibold text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          ))}

          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/30 rounded-2xl px-5 py-4 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#25d366] text-white flex items-center justify-center shrink-0">
                <MessageCircle size={18} />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#128c4a]">
                  WhatsApp
                </div>
                <div className="text-base font-bold text-primary leading-tight">
                  Chat with us
                </div>
              </div>
            </div>
            <span className="text-[#128c4a] font-semibold text-sm group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <div className="flex items-center gap-2 text-xs text-muted pt-3 border-t border-border">
            <Clock3 size={14} className="text-accent" />
            Reception is available 24/7 for emergencies and bookings.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        suppressHydrationWarning
      >
        {children}
      </button>

      {open && mounted && createPortal(modal, document.body)}
    </>
  );
}
