import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Servicesection from "@/components/Servicesection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import AboutBox from "@/components/AboutBox";
import Hero from "@/components/Hero";

import Gallery from "@/components/gallery";

import Contect from "@/components/Contect";

export default function page() {
  return (
    <div>
      <Hero />
      <AboutBox />

      <Gallery />

      <Contect />

    </div>
  );
}
