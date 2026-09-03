export type Promotion = {
  id: string;
  title: string;
  discount: string;
  condition: string;
};

export type PromotionGroup = {
  id: "laboratory" | "pharmacy" | "channeling";
  title: string;
  offers: Promotion[];
};

// Source: the confirmed details in the supplied Gomez Hospital request.
// Awaiting the handwritten source before publishing these conditional offers:
// - 10% Laboratory Discount: exact eligibility is missing.
// - Paid Booking Channeling: 5% on hospital charge; the payment condition,
//   including how the 12:00 PM cutoff applies, must be verified.
export const promotionGroups: PromotionGroup[] = [
  {
    id: "laboratory",
    title: "Laboratory Discounts",
    offers: [
      {
        id: "lab-discount-card",
        title: "Lab Discount Card",
        discount: "15% OFF",
        condition: "With a Lab Discount Card.",
      },
      {
        id: "fbs-lp-scr",
        title: "FBS + LP + SCR",
        discount: "20% OFF",
        condition: "When all three tests are taken together.",
      },
      {
        id: "gomez-out-center",
        title: "Gomez Out Center Benefit",
        discount: "Rs. 150",
        condition: "Applicable to Gomez Hospital only.",
      },
    ],
  },
  {
    id: "pharmacy",
    title: "Pharmacy Discounts",
    offers: [
      {
        id: "senior-pharmacy",
        title: "Senior Pharmacy Discount",
        discount: "5% OFF",
        condition: "For customers and patients aged 60 years and above.",
      },
    ],
  },
  {
    id: "channeling",
    title: "Channeling Discounts",
    offers: [
      {
        id: "morning-channeling",
        title: "Morning Channeling",
        discount: "15% OFF",
        condition: "On hospital charge · 7:00 AM – 8:00 AM.",
      },
      {
        id: "friday-channeling",
        title: "Friday Channeling",
        discount: "15% OFF",
        condition: "On hospital charge · Fridays.",
      },
      {
        id: "channel-card",
        title: "Channel Card",
        discount: "15% OFF",
        condition: "On hospital charge with a Channel Card.",
      },
    ],
  },
];
