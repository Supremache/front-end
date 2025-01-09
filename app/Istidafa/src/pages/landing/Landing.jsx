import React from "react";
import Hero from "./sections/Hero";
import Faq from "./sections/Faq";
import Reviews from "./sections/Reviews";
import Blog from "./sections/Blog";
import Pricing from "./sections/Pricing";

export default function Landing() {
  return (
    <>
      <Hero />
      <Pricing />
      <Reviews />
      <Blog />
      <Faq />
    </>
  );
}
