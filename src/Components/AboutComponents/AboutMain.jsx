import React from "react";
import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutTeam from "./AboutTeam";
import AboutTestimonials from "./AboutTestimonials";
import AboutWhy from "./AboutWhy";

export default function AboutMain() {
  return (
    <div>
      <AboutHero />
      <AboutIntro />
      <AboutWhy />
      <AboutTeam />
      <AboutTestimonials />
    </div>
  );
}
