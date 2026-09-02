"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, X, Info } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import { DoctorCard } from "@/components/DoctorCard";
import { getSpecialtyInfos } from "@/data/specialties";
import { getSpecialtyClinicLabel, resolveSpecialtyFilter, specialtyClinics } from "@/data/services";
import { normalizeSearch, getDoctorSuggestions } from "@/data/doctors";

type Props = {
  doctors: Doctor[];
  specialties: string[];
};

export function DoctorList({ doctors, specialties }: Props) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [specialtyParam, setSpecialtyParam] = useState("");
  
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = searchParams.get("q");
    const s = searchParams.get("specialty");
    if (q) setQuery(q);
    if (s) setSpecialtyParam(s);
  }, []); // Only run once on mount

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const suggestions = useMemo(() => {
    return getDoctorSuggestions(query);
  }, [query]);

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
    const q = normalizeSearch(query);

    return doctors.filter((d) => {
      const matchQ =
        !q ||
        normalizeSearch(d.name).includes(q) ||
        normalizeSearch(d.specialty).includes(q) ||
        normalizeSearch(d.hospital).includes(q);
      const matchS =
        activeFilterSpecialties.length === 0 ||
        activeFilterSpecialties.includes(d.specialty);
      return matchQ && matchS;
    });
  }, [doctors, query, activeFilterSpecialties]);

  const handleSelectSuggestion = (name: string) => {
    setQuery(name);
    setShowDropdown(false);
    // Smooth scroll to results
    setTimeout(() => {
      document.getElementById("doctor-results-grid")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || !query) return;
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        e.preventDefault();
        handleSelectSuggestion(suggestions[activeIndex].name);
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  const selectValue = specialtyClinics.some((c) => c.slug === specialtyParam)
    ? ""
    : activeFilterSpecialties.length === 1
      ? activeFilterSpecialties[0]
      : "";

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 mb-8 max-w-4xl mx-auto">
        <div className="relative flex-1" ref={searchContainerRef}>
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search by name, specialty or hospital..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
            suppressHydrationWarning
          />
          
          {showDropdown && query.trim() !== "" && (
            <div className="absolute top-full mt-2 left-0 w-full bg-white border border-border rounded-2xl shadow-xl z-50 overflow-hidden py-2">
              {suggestions.length > 0 ? (
                <ul className="max-h-[300px] overflow-y-auto">
                  {suggestions.map((s, i) => (
                    <li key={s.name}>
                      <button
                        type="button"
                        onClick={() => handleSelectSuggestion(s.name)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`w-full text-left px-5 py-2.5 text-sm transition-colors ${
                          i === activeIndex
                            ? "bg-accent-soft text-accent font-medium"
                            : "text-primary hover:bg-accent-soft hover:text-accent"
                        }`}
                      >
                        {s.name}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-5 py-3 text-sm text-muted">No doctors found</div>
              )}
            </div>
          )}
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
        <div id="doctor-results-grid" className="text-center py-16 text-muted">
          No doctors found matching your search.
        </div>
      ) : (
        <div id="doctor-results-grid" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d) => (
            <DoctorCard key={d.name} doctor={d} />
          ))}
        </div>
      )}
    </>
  );
}
