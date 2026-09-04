"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { BookingButton } from "@/components/BookingButton";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`relative inset-x-0 z-40 transition-all duration-300 ${
        overHero
          ? "bg-transparent border-b border-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
      }`}
    >
      <div className="max-w-[88rem] mx-auto flex items-center justify-between px-4 sm:px-6 h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-3 lg:gap-4" onClick={() => setOpen(false)}>
          <Image
            src="/images/gomez_logo_1.png"
            alt="Gomez Hospital Logo"
            width={72}
            height={72}
            className="h-10 lg:h-14 w-auto transition-all"
            priority
          />
          <div className="flex min-w-0 flex-col justify-center">
            <div className="truncate font-bold text-lg sm:text-lg lg:text-[30px] text-primary tracking-[-0.025em] leading-none sm:mb-0.5 lg:mb-1">
              {site.name}
            </div>
            <div className="hidden sm:block text-xs font-semibold text-primary/80 leading-none mb-1 lg:mb-1">Awissawella</div>
            <div className="hidden sm:block text-[10px] lg:text-[9px] font-semibold uppercase tracking-[0.1em] lg:tracking-[0.14em] text-muted leading-none">
              Est. {site.established} · {site.tagline}
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent hover:bg-surface transition-colors rounded-md"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform group-hover:rotate-180"
                  />
                </button>
                <div className="absolute left-0 top-full pt-2 min-w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white border border-border rounded-xl shadow-lg overflow-hidden py-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-accent hover:bg-surface transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent hover:bg-surface transition-colors rounded-md"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <BookingButton className="bg-accent-2 hover:bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-md shadow-accent/30 whitespace-nowrap">
            Book Appointment
          </BookingButton>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 rounded-md text-primary"
          onClick={() => setOpen((v) => !v)}
          suppressHydrationWarning
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="min-h-0 bg-white border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="px-4 py-4 flex flex-col">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="py-2 border-b border-border/60"
                >
                  <div className="py-1 px-2 text-foreground font-medium">
                    {link.label}
                  </div>
                  <div className="flex flex-col pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="py-2 px-2 text-sm text-foreground/80 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 border-b border-border/60 text-foreground font-medium hover:text-accent"
                >
                  {link.label}
                </Link>
              )
            )}
            <BookingButton className="mt-4 bg-accent-2 hover:bg-accent text-white text-center font-semibold px-4 py-3 rounded-full">
              Book Appointment
            </BookingButton>
          </nav>
        </div>
      </div>
    </header>
  );
}
