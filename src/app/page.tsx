import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
export default function page() {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
      <FAQSection />
      <HeroSection />
    </div>
  );
}
