import { EventCard } from "@/components/EventCard";
import { events } from "@/data/events";

export const metadata = {
  title: "Events & Activities — Gomez Hospital",
  description:
    "Hospital events, health camps, awareness seminars, and community activities at Gomez Hospital.",
};

export default function EventPage() {
  return (
    <>
      <section className="pt-28 lg:pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Hospital Events
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
            Event And
            <br />
            Activity
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base lg:text-lg leading-relaxed">
            Join our community programmes, health camps, and awareness sessions — designed to bring
            expert medical guidance closer to you.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
