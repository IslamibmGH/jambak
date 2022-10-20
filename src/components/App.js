import React from "react";
import AppBar from "./AppBar";
import HeroImg from "../assets/Asset31.png";
import HeroLeft from "./HeroLeft";
import AppFeatures1 from "./AppFeatures1";
import AppFeatures2 from "./AppFeatures2";
import AppFeatures3 from "./AppFeatures3";
import AppFeatures4 from "./AppFeatures4";
import ScreenSection from "./ScreenSection";
import SubHero from "./SubHero";
import SubAppBar from "./SubAppBar";
import CarouselSection1 from "./CarouselSection1.js";
import CarouselSection2 from "./CarouselSection2.js";
import Fade from "react-reveal/Fade";

const App = () => {
  return (
    <div>
      <div style={{ ...Hero }}>
        <AppBar />
        <HeroLeft />
      </div>

      <CarouselSection1 />

      <AppFeatures1 />
      <AppFeatures2 />
      <AppFeatures3 />
      <AppFeatures4 />
      <ScreenSection />
      <CarouselSection2 />
      <SubHero />
      <div style={{ overflowX: "hidden" }}>
        <SubAppBar />
      </div>
    </div>
  );
};

const Hero = {
  background: `url(${HeroImg})`,
  backgroundSize: "cover",
  overflowX: "hidden",
};

export default App;
