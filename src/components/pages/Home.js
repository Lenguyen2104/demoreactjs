import React from "react";
import "../../App.css";
import Cards from "../Cards";
import { Footer } from "../Footer";
import HeroSection from "../HeroSection";
import { Review } from "../Review";

function Home() {
  console.log("ssssss");
  return (
    <>
      <HeroSection />
      <Cards />
      <Review />
      <Footer />
    </>
  );
}

export default Home;
