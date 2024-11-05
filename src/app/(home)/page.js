import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "./Hero-Section";

function HomePage() {
  return (
    <div className="mx-auto">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default HomePage;
