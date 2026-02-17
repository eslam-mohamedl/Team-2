
import AboutSection from "@/components/organisms/AboutSection";
import HeroSections from "@/components/organisms/HeroSections";
import FeatureSection from "./../../components/organisms/featureSection"
import HeroSection from "@/components/organisms/HeroSection";
import Blog from "@/components/organisms/Blog";
import ServiceSection from "@/components/organisms/ServiceSection";
import PricingSection from "@/components/organisms/PricingSection";


export default function page() {
  return (
    <div>
         <HeroSection />
      <HeroSections />
      <ServiceSection/>
      <PricingSection />
      <Blog/>
    </div>
  );
}
