import React from "react";
import HomeHero from "./HomeHero";
import HomeWhy from "./HomeWhy";
import HomeCOurses from "./HomeCOurses";
import HomeContact from "./HomeContact";
import HomeIntro from "./HomeIntro";
import HomeHighlights from "./HomeHighlights";
import CasinoCTASection from "../HelperComponents/CasinoCTASection";
import HomeCTA from "./HomeCTA";

export default function HomeMain() {
  return (
    <div className="bg-[]">
      <HomeHero />
      <HomeHighlights />
      <HomeIntro />
      <HomeCOurses />
      <HomeWhy />
      <HomeCTA />
      {/* <HomeContact /> */}
    </div>
  );
}
