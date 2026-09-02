import { Phone, Mail, Clock3 } from "lucide-react";

export function TopBar() {
  return (
    <div className="relative z-50 bg-primary w-full border-b border-white/10">
      {/* Compact mobile call actions */}
      <div className="md:hidden flex w-full px-3 py-2">
        <a
          href="tel:036720200"
          className="flex w-full min-w-0 justify-center items-center gap-2 bg-[#dc2626] hover:bg-[#ef4444] active:scale-[0.98] transition-all text-white px-2.5 py-2 rounded-xl shadow-sm"
        >
          <div className="bg-white/20 p-2 rounded-full shrink-0">
            <Phone size={14} fill="currentColor" />
          </div>
          <div className="min-w-0 flex flex-col items-start justify-center">
            <span className="text-[9px] font-bold uppercase tracking-wide text-white/90 leading-none">
              Emergency & Ambulance
            </span>
            <span className="mt-1 text-[13px] font-bold leading-none whitespace-nowrap">
              036 720 200
            </span>
          </div>
        </a>
      </div>

      {/* DESKTOP LAYOUT (Clean, Horizontal, Elegant) */}
      <div className="hidden md:flex max-w-[88rem] mx-auto px-4 sm:px-6 h-12 lg:h-[3.25rem] items-center justify-between">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-3">
            {/* Desktop Emergency & Ambulance */}
            <a
              href="tel:036720200"
              className="group flex items-center gap-2.5 bg-[#dc2626] hover:bg-[#ef4444] text-white px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="bg-white/20 p-1.5 rounded-full group-hover:scale-110 transition-transform">
                <Phone size={13} fill="currentColor" />
              </div>
              <div className="flex flex-col items-start justify-center pr-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-white/90 mb-0.5 leading-none">Emergency & Ambulance</span>
                <span className="text-[13px] font-bold leading-none">036 720 200</span>
              </div>
            </a>
          </div>

          <a href="mailto:info@gomezhospital.lk" className="hidden lg:flex items-center gap-1.5 text-white/60 hover:text-white/90 text-[13px] font-medium transition-colors">
            <Mail size={14} />
            info@gomezhospital.lk
          </a>
        </div>
        
        <div className="flex items-center">
          <span className="flex items-center gap-1.5 font-medium text-white/70 text-sm">
            <Clock3 size={14} className="text-white/40" />
            24 / 7 Open
          </span>
        </div>
      </div>
    </div>
  );
}
