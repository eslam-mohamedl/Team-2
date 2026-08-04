import Herosection from "@/components/Herosection";
import Aboutsection from "@/components/Aboutseciton";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Pricingsection from "@/components/Pricingsection";
import Blog from "@/components/Blog";
import TeamSection from "@/components/TeamSection";
import Questions from "@/components/Questions";
import FAQsection from "@/components/FAQsection";
import Navbar from "@/components/Navbar";
import StatisticsSection from "@/components/StatisticsSection";
import CallToActionSection from "@/components/CallToActionSection";
import ServicesSection from "@/components/ServicesSection";
import HeroSection2 from "@/components/HeroSection2";
import { Navbar1 } from "@/components/Navbar1";

export default function page() {
  return (
    <>
      <Navbar />
      <Navbar1 />
      <Herosection />
      <Aboutsection />
      <Testimonial/>
      <CallToActionSection />
      <Contact />
      <Pricingsection />
      <Blog />
      <TeamSection />
      <Questions/>
      <FAQsection />
      <StatisticsSection/>
      <ServicesSection/>
      <HeroSection2/>
    </>
  );
}
