import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Servicesection from "@/components/Servicesection";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
export default function page() {
  return 
  <div> 
    <Navbar/>
   <Servicesection/>
      <Navbar />
      <About />
      <Footer />
      <FAQSection />
      <HeroSection />
  </div>;

}
