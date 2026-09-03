import type { Promotion } from "@/data/promotions";

type Props = {
  promotion: Promotion;
  headingLevel?: "h3" | "h4";
};

export function PromotionCard({ promotion, headingLevel: Heading = "h4" }: Props) {
  return (
    <article className="h-full overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
      <div className="h-2 bg-gradient-to-r from-accent to-accent-2" aria-hidden="true" />
      <div className="p-6">
        <span className="inline-flex rounded-full bg-accent-soft px-3 py-1.5 text-lg font-bold leading-tight text-primary ring-1 ring-inset ring-accent/15">
          {promotion.discount}
        </span>
        <Heading className="mt-4 text-lg font-bold leading-tight text-primary">
          {promotion.title}
        </Heading>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {promotion.condition}
        </p>
      </div>
    </article>
  );
}
