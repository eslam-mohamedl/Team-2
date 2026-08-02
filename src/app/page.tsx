import Herosection from "@/components/Herosection";
import Aboutsection from "@/components/Aboutseciton";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Pricingsection from "@/components/Pricingsection";
import Blog from "@/components/Blog";
import TeamSection from "@/components/TeamSection";
import Questions from "@/components/Questions";
export default function page() {
  return (
    <>
      <Herosection />
      <Aboutsection />
      <Testimonial/>
      <Contact />
      <Pricingsection />
      <Blog />
      <TeamSection />
      <Questions/>
    </>
  );
}
