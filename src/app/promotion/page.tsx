import { PromotionCard } from "@/components/PromotionCard";
import { promotions } from "@/data/promotions";

export const metadata = {
  title: "Promotions & Discounts — Gomez Hospital",
  description:
    "Exclusive medical promotions and discounts on health checkups, dental care, maternity packages, and more at Gomez Hospital.",
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
            Premium healthcare offers designed to make essential screenings and specialist care more
            accessible.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {promotions.map((promotion) => (
              <PromotionCard key={promotion.id} promotion={promotion} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
