"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, X, Info } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import { DoctorCard } from "@/components/DoctorCard";
import { getSpecialtyInfos } from "@/data/specialties";
import { getSpecialtyClinicLabel, resolveSpecialtyFilter, specialtyClinics } from "@/data/services";

type Props = {
  doctors: Doctor[];
  specialties: string[];
};

export function DoctorList({ doctors, specialties }: Props) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [specialtyParam, setSpecialtyParam] = useState("");

  useEffect(() => {
    const q = searchParams.get("q");
    const s = searchParams.get("specialty");
    setQuery(q ?? "");
    setSpecialtyParam(s ?? "");
  }, [searchParams]);

  const activeFilterSpecialties = useMemo(
    () => resolveSpecialtyFilter(specialtyParam, specialties),
    [specialtyParam, specialties],
  );

  const activeFilterLabel = useMemo(() => {
    if (!specialtyParam) return null;
    return getSpecialtyClinicLabel(specialtyParam) ?? specialtyParam;
  }, [specialtyParam]);

  const activeSpecialtyInfos = useMemo(
    () => getSpecialtyInfos(activeFilterSpecialties),
    [activeFilterSpecialties],
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return doctors.filter((d) => {
      const matchQ =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q) ||
        d.hospital.toLowerCase().includes(q);
      const matchS =
        activeFilterSpecialties.length === 0 ||
        activeFilterSpecialties.includes(d.specialty);
      return matchQ && matchS;
    });
  }, [doctors, query, activeFilterSpecialties]);

  const selectValue = specialtyClinics.some((c) => c.slug === specialtyParam)
    ? ""
    : activeFilterSpecialties.length === 1
      ? activeFilterSpecialties[0]
      : "";

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 mb-8 max-w-4xl mx-auto">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, specialty or hospital..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            suppressHydrationWarning
          />
        </div>
        <select
          value={selectValue}
          onChange={(e) => setSpecialtyParam(e.target.value)}
          className="px-4 py-3 rounded-full border border-border bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 min-w-[200px]"
          suppressHydrationWarning
        >
          <option value="">All Specialties</option>
          {specialties.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {activeFilterLabel && (
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft text-primary px-4 py-2 text-sm">
            <span>
              Filtered by: <span className="font-semibold">{activeFilterLabel}</span>
            </span>
            <Link
              href="/doctors"
              className="inline-flex items-center justify-center rounded-full p-1 hover:bg-white/70 transition-colors"
              aria-label="Clear specialty filter"
            >
              <X size={14} />
            </Link>
          </div>
        </div>
      )}

      {activeSpecialtyInfos.length > 0 && (
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          {activeSpecialtyInfos.map((info) => (
            <div
              key={info.name}
              className="rounded-2xl bg-accent-soft/30 border border-accent/15 p-5 shadow-sm"
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white text-accent flex items-center justify-center shrink-0 shadow-sm border border-accent/10">
                  <Info size={18} aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary text-base lg:text-lg mb-3">
                    {info.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <p className="text-sm text-muted leading-relaxed">
                      {info.englishDescription}
                    </p>
                    <p className="text-sm text-muted leading-relaxed font-sinhala">
                      {info.sinhalaDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mb-6 text-sm text-muted">
        Showing <span className="font-semibold text-primary">{filtered.length}</span>{" "}
        of {doctors.length} specialists
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted">
          No doctors found matching your search.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d) => (
            <DoctorCard key={d.name} doctor={d} />
          ))}
        </div>
      )}
    </>
  );
}
