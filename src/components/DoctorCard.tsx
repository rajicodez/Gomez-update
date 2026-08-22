import { Stethoscope, Calendar, Building } from "lucide-react";
import type { Doctor } from "@/data/doctors";

type Props = {
  doctor: Doctor;
  index?: number;
};

export function DoctorCard({ doctor: d, index }: Props) {
  const isFemale = d.gender === "female";

  return (
    <div className="group relative lift bg-white border border-border rounded-3xl p-6 overflow-hidden flex flex-col h-full">
      <div
        className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${
          isFemale ? "bg-rose-soft" : "bg-accent-soft"
        } -translate-y-8 translate-x-8`}
      />
      <div className="relative flex items-start gap-4">
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
            isFemale
              ? "bg-gradient-to-br from-rose to-pink-400 text-white"
              : "bg-gradient-to-br from-accent to-accent-2 text-white"
          }`}
        >
          <Stethoscope size={32} />
        </div>
        <div className="flex-1 min-w-0 pt-1">
          {index !== undefined && (
            <div className="text-[10px] font-bold uppercase tracking-widest text-muted">
              #{String(index + 1).padStart(2, "0")}
            </div>
          )}
          <h3 className="font-bold text-primary leading-tight mt-1">{d.name}</h3>
          <div
            className={`mt-1.5 inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full ${
              isFemale
                ? "bg-rose-soft text-rose"
                : "bg-accent-soft text-accent"
            }`}
          >
            {d.specialty}
          </div>
        </div>
      </div>

      {d.credentials && d.credentials.length > 0 && (
        <ul className="relative mt-4 space-y-0.5 text-[11px] text-muted leading-relaxed">
          {d.credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      )}

      <div className="relative mt-auto pt-5 border-t border-border space-y-2 text-sm">
        <div className="flex items-start gap-2 text-muted">
          <Building size={14} className="shrink-0 mt-0.5" />
          <span className="line-clamp-2">{d.hospital}</span>
        </div>
        <div className="flex items-start gap-2 text-muted">
          <Calendar size={14} className="text-accent shrink-0 mt-0.5" />
          <span className="line-clamp-2">{d.clinicDays}</span>
        </div>
      </div>
    </div>
  );
}
