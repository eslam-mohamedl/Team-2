import About from "@/components/About";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <About />
    </div>
  );
}
