import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { featuredPromotion } from "@/data/promotions";

export function PromotionsPreview() {
  const promo = featuredPromotion;

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 medical-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Exclusive Offers
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
            Promotions &
            <br />
            Discounts
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            Limited-time savings on essential health services — crafted for patients who expect
            exceptional care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden border border-border shadow-lg">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
            <Image
              src={promo.image}
              alt={promo.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="p-8 lg:p-10 flex flex-col justify-center text-primary">
            <span className="inline-flex self-start bg-gold text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              {promo.discount}
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight">{promo.title}</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">{promo.description}</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-muted">
              <Calendar size={16} className="text-gold shrink-0" />
              <span>{promo.validUntil}</span>
            </div>
            <Link
              href="/promotion"
              className="mt-8 inline-flex items-center justify-center gap-2 self-start bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-all border-2 border-gold/40 hover:border-gold shadow-lg"
            >
              See More <ArrowRight size={18} className="text-gold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
