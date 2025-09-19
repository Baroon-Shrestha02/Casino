import React from "react";
import HomeHero from "./HomeHero";
import HomeWhy from "./HomeWhy";
import HomeCOurses from "./HomeCOurses";
import HomeContact from "./HomeContact";
import HomeIntro from "./HomeIntro";

export default function HomeMain() {
  return (
    <div>
      <HomeHero />
      <HomeIntro />
      <HomeWhy />
      <HomeCOurses />
      <HomeContact />
    </div>
  );
}
