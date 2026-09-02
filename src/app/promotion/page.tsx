import { PromotionGroups } from "@/components/PromotionGroups";

export const metadata = {
  title: "Promotions & Discounts — Gomez Hospital",
  description:
    "Explore Gomez Hospital discounts across laboratory, pharmacy and channeling services.",
};

export default function PromotionPage() {
  return (
    <>
      <section className="pt-28 lg:pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Exclusive Offers
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
            Promotions &
            <br />
            Discounts
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-base lg:text-lg leading-relaxed">
            Explore our current discounts across laboratory, pharmacy and channeling services.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="sr-only">Discounts by service</h2>
          <PromotionGroups />
        </div>
      </section>
    </>
  );
}
