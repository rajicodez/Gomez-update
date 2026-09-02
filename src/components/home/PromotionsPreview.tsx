import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PromotionCard } from "@/components/PromotionCard";
import { promotionGroups } from "@/data/promotions";

const previewPromotions = promotionGroups.flatMap((group) => group.offers).slice(0, 3);

export function PromotionsPreview() {
  return (
    <section
      id="promotions"
      aria-labelledby="promotions-heading"
      className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
    >
      <div className="medical-pattern pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            Exclusive Offers
          </div>
          <h2
            id="promotions-heading"
            className="text-3xl font-bold leading-tight text-primary lg:text-5xl"
          >
            Promotions &amp; <span className="text-accent">Discounts</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Explore our current discounts across laboratory, pharmacy and channeling services.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewPromotions.map((promotion) => (
            <li key={promotion.id} className="min-w-0">
              <PromotionCard promotion={promotion} headingLevel="h3" />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Link
            href="/promotion"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            See More <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
