import React from "react";
import Blog from "@/components/Blog";
import Feature from "@/components/Feature";
import Team from "@/components/Team";
import Contect from "@/components/Contect";
import Statistics from "@/components/Statistics";

export default function page() {
  return (
    <>
      <div>about</div>
      <Blog />
      <Feature />
      <Team />
      <Contect />
      <Statistics />
    </>
  );
}
