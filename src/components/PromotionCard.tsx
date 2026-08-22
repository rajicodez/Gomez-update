import Image from "next/image";
import { Calendar } from "lucide-react";
import type { Promotion } from "@/data/promotions";

type Props = {
  promotion: Promotion;
};

export function PromotionCard({ promotion }: Props) {
  return (
    <article className="group lift bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/20 transition-colors">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={promotion.image}
          alt={promotion.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        <span className="absolute top-4 left-4 bg-gold text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
          {promotion.discount}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-primary leading-snug group-hover:text-primary-dark transition-colors">
          {promotion.title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
          {promotion.description}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted border-t border-border pt-4">
          <Calendar size={14} className="text-gold shrink-0" />
          <span>{promotion.validUntil}</span>
        </div>
      </div>
    </article>
  );
}
