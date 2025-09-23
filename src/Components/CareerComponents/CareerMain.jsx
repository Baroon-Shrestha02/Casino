import React from "react";
import CareerHero from "./CareerHero";
import CareerPartners from "./CareerPartners";
import CareerPosts from "./CareerPosts";
import CareerCV from "./CareerCV";

export default function CareerMain() {
  return (
    <div>
      <CareerHero />
      <CareerPartners />
      <CareerPosts />
      <CareerCV />
    </div>
  );
}
