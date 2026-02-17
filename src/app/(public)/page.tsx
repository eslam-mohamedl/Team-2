
import HeroSection from "@/components/organisms/HeroSection";
import Blog from "@/components/organisms/Blog";
export default function page() {
  return (
    <div>
      <HeroSection />
  <Blog/>

import HeroSections from "@/components/organisms/HeroSections";

import ServiceSection from "@/components/organisms/ServiceSection";

import PricingSection from "@/components/organisms/PricingSection";

export default function page() {
  return (
    <div>
      <HeroSections />
      <ServiceSection/>
      <PricingSection />

    </div>
  );
}
