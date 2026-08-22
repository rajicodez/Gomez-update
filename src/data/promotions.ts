export type Promotion = {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
  featured?: boolean;
};

export const promotions: Promotion[] = [
  {
    id: "full-body-checkup",
    title: "20% off Full Body Health Checkup",
    description:
      "Comprehensive screening including blood work, ECG, and physician review — an ideal annual wellness package for adults seeking peace of mind.",
    discount: "20% OFF",
    validUntil: "Valid until 31 December 2026",
    image: "/images/diagnostic.jpg",
    featured: true,
  },
  {
    id: "free-dental-consultation",
    title: "Free Dental Consultation",
    description:
      "Complimentary initial dental assessment with our specialists. Perfect for new patients exploring orthodontic or general dental care options.",
    discount: "FREE",
    validUntil: "Valid until 30 September 2026",
    image: "/images/dental.jpg",
  },
  {
    id: "maternity-package",
    title: "Maternity Package Discount",
    description:
      "Exclusive savings on our complete maternity care package, covering antenatal visits, delivery planning, and postnatal follow-up support.",
    discount: "15% OFF",
    validUntil: "Valid until 31 March 2027",
    image: "/images/maternity.jpg",
  },
  {
    id: "senior-wellness",
    title: "Senior Wellness Screening",
    description:
      "Tailored health screening for patients aged 55 and above, with discounted laboratory panels and a dedicated physician consultation.",
    discount: "25% OFF",
    validUntil: "Valid until 31 August 2026",
    image: "/images/OPD-Wellness.jpg",
  },
];

export const featuredPromotion =
  promotions.find((p) => p.featured) ?? promotions[0];
