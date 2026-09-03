"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search,
  Stethoscope,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { specialties, getDoctorSuggestions } from "@/data/doctors";
import { clinics } from "@/data/clinics";

export function QuickActions() {
  const router = useRouter();
  const [specialty, setSpecialty] = useState("");
  const [name, setName] = useState("");
  const [expandedClinic, setExpandedClinic] = useState<string | null>(null);

  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveIndex(-1);
  }, [name]);

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
    return getDoctorSuggestions(name);
  }, [name]);

  const handleSelectSuggestion = (doctorName: string) => {
    setName(doctorName);
    setShowDropdown(false);
    const params = new URLSearchParams();
    if (specialty) params.set("specialty", specialty);
    params.set("q", doctorName);
    router.push(`/doctors${params.toString() ? `?${params}` : ""}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || !name) return;
    
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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (specialty) params.set("specialty", specialty);
    if (name) params.set("q", name);
    router.push(`/doctors${params.toString() ? `?${params}` : ""}`);
  };

  return (
    <section className="relative bg-white -mt-12 lg:-mt-16 z-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-[0_25px_70px_-20px_rgba(10,37,64,0.25)] border border-border overflow-hidden">
          {/* Find a doctor widget */}
          <div className="p-5 lg:p-6 bg-gradient-to-r from-accent-soft/40 via-white to-accent-soft/40 border-b border-border">
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-3 items-stretch"
            >
              <div className="relative" ref={searchContainerRef}>
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search Doctor Name"
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-white text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  suppressHydrationWarning
                />
                
                {showDropdown && name.trim() !== "" && (
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
              <div className="relative">
                <Stethoscope
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-white text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 appearance-none"
                  suppressHydrationWarning
                >
                  <option value="">Select Specialty</option>
                  {specialties.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-all whitespace-nowrap shadow-md shadow-primary/20"
                suppressHydrationWarning
              >
                <Search size={16} />
                Search
              </button>
            </form>
            <div className="text-[11px] text-muted mt-2 flex items-center gap-2">
              <Calendar size={12} />
              Find the right specialist from our team of 40+ consultant doctors.
            </div>
          </div>

          {/* Specialist Clinic Section */}
          <div className="p-6 lg:p-8 bg-slate-50/50">
            <h2 className="text-xl lg:text-2xl font-bold text-primary mb-6">Specialist Clinic</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {clinics.map((clinic) => (
                <button
                  key={clinic.id}
                  onClick={() => setExpandedClinic(expandedClinic === clinic.id ? null : clinic.id)}
                  className="group flex flex-col w-full text-left bg-white border border-border hover:border-accent/30 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent/40"
                  aria-expanded={expandedClinic === clinic.id}
                >
                  <div className="p-4 lg:p-5 flex items-center gap-4 w-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <clinic.icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-primary text-sm lg:text-base">{clinic.name}</div>
                      <div className="text-[11px] text-muted">View clinic details</div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-muted group-hover:text-accent transition-transform duration-300 shrink-0 mr-1 ${
                        expandedClinic === clinic.id ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out bg-surface w-full ${
                      expandedClinic === clinic.id
                        ? "grid-rows-[1fr] opacity-100 border-t border-border"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-4 lg:px-5 lg:py-4 text-sm font-medium text-primary">
                        {clinic.doctor ? (
                          <div className="flex items-center gap-2">
                            <Stethoscope size={16} className="text-accent shrink-0" />
                            {clinic.doctor}
                          </div>
                        ) : (
                          <span className="text-muted text-xs lg:text-sm">Doctor information will be updated soon.</span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
