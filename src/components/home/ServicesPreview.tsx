"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
export function ServicesPreview() {
  return (
    <section
      id="services"
      className="relative py-24 bg-surface overflow-hidden"
    >
      <div className="absolute inset-0 medical-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              What We Offer
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
              Comprehensive
              <br />
              <span className="text-accent">Medical Services</span>
            </h2>
          </div>
          <p className="text-muted max-w-md text-base lg:text-right">
            From routine checkups to advanced surgical procedures — delivered with compassion and
            modern technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, idx) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-white border border-border hover:border-accent/40 transition-all shadow-sm lift"
            >

              <div className="relative aspect-[4/3]">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-sm text-accent-tint group-hover:gap-3 transition-all">
                    Explore <ArrowRight size={14} />
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
