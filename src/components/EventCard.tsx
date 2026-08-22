import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import type { HospitalEvent } from "@/data/events";

type Props = {
  event: HospitalEvent;
};

export function EventCard({ event }: Props) {
  return (
    <article className="group lift bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-colors">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <span className="absolute top-4 left-4 bg-gold text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
          Upcoming
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary leading-snug group-hover:text-primary-dark transition-colors">
          {event.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {event.description}
        </p>
        <div className="mt-4 space-y-2 text-xs text-muted border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gold shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-gold shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
