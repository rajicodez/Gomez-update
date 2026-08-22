"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import type { BranchDoctor } from "@/data/branches";

export function BranchDoctorTable({ doctors }: { doctors: BranchDoctor[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const t = q.toLowerCase().trim();
    if (!t) return doctors;
    return doctors.filter(
      (d) =>
        d.name.toLowerCase().includes(t) ||
        d.specialty.toLowerCase().includes(t) ||
        d.hospital.toLowerCase().includes(t)
    );
  }, [doctors, q]);

  return (
    <>
      <div className="relative mb-5">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by name, specialty, or hospital..."
          className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-white focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          suppressHydrationWarning
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-muted bg-surface rounded-2xl">
          No specialists found matching your search.
        </div>
      ) : (
        <div className="overflow-x-auto bg-white border border-border rounded-2xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface text-primary">
                <th className="text-left px-5 py-3 font-semibold">Specialty</th>
                <th className="text-left px-5 py-3 font-semibold">Doctor Name</th>
                <th className="text-left px-5 py-3 font-semibold">Hospital</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((d, i) => (
                <tr key={i} className="border-t border-border hover:bg-surface/50">
                  <td className="px-5 py-3">
                    <span className="inline-block text-xs font-semibold bg-accent-soft text-accent px-2.5 py-1 rounded-full">
                      {d.specialty}
                    </span>
                  </td>
                  <td className="px-5 py-3 font-medium text-primary">{d.name}</td>
                  <td className="px-5 py-3 text-muted">{d.hospital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
