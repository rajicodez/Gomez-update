import { FlaskConical, Pill, Stethoscope } from "lucide-react";
import { PromotionCard } from "@/components/PromotionCard";
import { promotionGroups } from "@/data/promotions";

const categoryIcons = {
  laboratory: FlaskConical,
  pharmacy: Pill,
  channeling: Stethoscope,
};

export function PromotionGroups() {
  return (
    <div className="space-y-8 sm:space-y-10">
      {promotionGroups.map((group) => {
        const Icon = categoryIcons[group.id];

        return (
          <section key={group.id} aria-labelledby={`discounts-${group.id}`}>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent ring-1 ring-inset ring-accent/15">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3
                id={`discounts-${group.id}`}
                className="text-lg font-bold leading-snug text-primary sm:text-xl"
              >
                {group.title}
              </h3>
              <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
            </div>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.offers.map((promotion) => (
                <li key={promotion.id} className="min-w-0">
                  <PromotionCard promotion={promotion} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
