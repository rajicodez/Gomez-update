import { Phone, Mail, Clock3, Ambulance, ChevronRight } from "lucide-react";
import { site } from "@/data/site";

export function TopBar() {
  return (
    <div className="relative z-50 bg-primary w-full border-b border-white/10">
      {/* MOBILE LAYOUT (Stacked, Clean, Elegant) */}
      <div className="md:hidden flex flex-col w-full px-4 py-3 gap-2.5">
        <div className="flex flex-col gap-2">
          {/* Mobile Emergency */}
          <a
            href={`tel:${site.phones[0].replace(/\s/g, "")}`}
            className="flex items-center justify-between bg-[#dc2626] hover:bg-[#ef4444] active:scale-[0.98] transition-all text-white p-3 rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="bg-white/20 p-2 rounded-full">
                <Phone size={16} fill="currentColor" />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 mb-1 leading-none">Emergency</span>
                <span className="text-base font-bold leading-none">{site.phones[0]}</span>
              </div>
            </div>
            <div className="text-white/80 pr-1">
              <ChevronRight size={18} />
            </div>
          </a>
          
          {/* Mobile Ambulance */}
          <a
            href={`tel:${site.ambulancePhone.replace(/\s/g, "")}`}
            className="flex items-center justify-between bg-white/5 hover:bg-white/10 active:scale-[0.98] transition-all text-white p-3 rounded-xl border border-white/10 shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="bg-white/10 p-2 rounded-full text-red-400">
                <Ambulance size={16} />
              </div>
              <div className="flex flex-col items-start justify-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 mb-1 leading-none">Ambulance</span>
                <span className="text-base font-bold leading-none">{site.ambulancePhone}</span>
              </div>
            </div>
            <div className="text-white/40 pr-1">
              <ChevronRight size={18} />
            </div>
          </a>
        </div>
        
        {/* Mobile Secondary Details */}
        <div className="flex items-center justify-between px-1 pt-1.5 mt-0.5">
          <a href="mailto:info@gomezhospital.com" className="flex items-center gap-1.5 text-white/50 hover:text-white/80 text-[11px] transition-colors">
            <Mail size={12} />
            <span className="truncate max-w-[150px]">info@gomezhospital.com</span>
          </a>
          <span className="flex items-center gap-1 text-white/50 text-[11px] font-medium bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
            <Clock3 size={11} />
            24/7 OPD
          </span>
        </div>
      </div>

      {/* DESKTOP LAYOUT (Clean, Horizontal, Elegant) */}
      <div className="hidden md:flex max-w-[88rem] mx-auto px-4 sm:px-6 h-12 lg:h-[3.25rem] items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-3">
            {/* Desktop Emergency */}
            <a
              href={`tel:${site.phones[0].replace(/\s/g, "")}`}
              className="group flex items-center gap-2.5 bg-[#dc2626] hover:bg-[#ef4444] text-white px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="bg-white/20 p-1.5 rounded-full group-hover:scale-110 transition-transform">
                <Phone size={13} fill="currentColor" />
              </div>
              <div className="flex flex-col items-start justify-center pr-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/90 mb-0.5 leading-none">Emergency</span>
                <span className="text-[13px] font-bold leading-none">{site.phones[0]}</span>
              </div>
            </a>

            {/* Desktop Ambulance */}
            <a
              href={`tel:${site.ambulancePhone.replace(/\s/g, "")}`}
              className="group flex items-center gap-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#dc2626]/50 text-white px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="bg-white/10 p-1.5 rounded-full text-red-400 group-hover:scale-110 transition-transform">
                <Ambulance size={13} />
              </div>
              <div className="flex flex-col items-start justify-center pr-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-red-400 mb-0.5 leading-none">Ambulance</span>
                <span className="text-[13px] font-bold leading-none">{site.ambulancePhone}</span>
              </div>
            </a>
          </div>

          <a href="mailto:info@gomezhospital.com" className="hidden lg:flex items-center gap-1.5 text-white/60 hover:text-white/90 text-[13px] font-medium transition-colors">
            <Mail size={14} />
            info@gomezhospital.com
          </a>
        </div>
        
        <div className="flex items-center">
          <span className="flex items-center gap-1.5 font-medium text-white/70 text-sm">
            <Clock3 size={14} className="text-white/40" />
            24 / 7 Open OPD
          </span>
        </div>
      </div>
    </div>
  );
}
