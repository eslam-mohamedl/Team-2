import AboutSection from "@/components/organisms/AboutSection";
import HeroSections from "@/components/organisms/HeroSections";
import CaltoSection from "@/components/organisms/CaltoSection";
import PricingSection from "@/components/organisms/PricingSection";

export default function page() {
  return (
    <div>
      <HeroSections />
      <CaltoSection />
      <AboutSection />
      <PricingSection />
    </div>
  );
}
