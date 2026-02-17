import AboutSection from "@/components/organisms/AboutSection";
import HeroSections from "@/components/organisms/HeroSections";
import CaltoSection from "@/components/organisms/CaltoSection";
import FeatureSection from "./../../components/organisms/featureSection";
import Blog from "@/components/organisms/Blog";
import ServiceSection from "@/components/organisms/ServiceSection";
import PricingSection from "@/components/organisms/PricingSection";
import ContactSection from "@/components/organisms/ContactSection";
export default function page() {
  return (
    <div>
      <HeroSections />
      <FeatureSection />
      <CaltoSection />
      <AboutSection />
      <ServiceSection />
      <PricingSection />
      <ContactSection />
      <Blog />
    </div>
  );
}
