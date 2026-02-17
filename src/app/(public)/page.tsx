import AboutSection from "@/components/organisms/AboutSection";
import HeroSections from "@/components/organisms/HeroSections";
import CaltoSection from "@/components/organisms/CaltoSection";
export default function page() {
  return (
    <div>
      <HeroSections />
      <CaltoSection />
      <AboutSection />
    </div>
  );
}
