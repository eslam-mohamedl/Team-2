import Herosection from "@/components/Herosection";
import Aboutsection from "@/components/Aboutseciton";
import Contact from "@/components/Contact";
import Pricingsection from "@/components/Pricingsection";
import Blog from "@/components/Blog";

export default function page() {
  return (
    <>
      <Herosection />
      <Aboutsection />
      <Contact />
      <Pricingsection />
      <Blog />
    </>
  );
}
