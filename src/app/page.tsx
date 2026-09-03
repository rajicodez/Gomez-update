import { Hero } from "@/components/home/Hero";
import { QuickActions } from "@/components/home/QuickActions";
import { About } from "@/components/home/About";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PromotionsPreview } from "@/components/home/PromotionsPreview";

import { WhyUs } from "@/components/home/WhyUs";

import { PackagesPreview } from "@/components/home/PackagesPreview";
import { BranchesPreview } from "@/components/home/BranchesPreview";
import { Recognitions } from "@/components/home/Recognitions";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickActions />
      <About />
      <ServicesPreview />
      <PackagesPreview />
      <BranchesPreview />
      <PromotionsPreview />

      <WhyUs />
      <Recognitions />
    </>
  );
}
