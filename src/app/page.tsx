import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Servicesection from "@/components/Servicesection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import AboutBox from "@/components/AboutBox";
import Hero from "@/components/Hero";
import FAQSection1 from "@/components/FAQSection1";
export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroSection />
      <AboutBox />
      <Servicesection />
      <FAQSection />
      <FAQSection1 />
      <About />
      <Footer />
    </div>
  );
}
