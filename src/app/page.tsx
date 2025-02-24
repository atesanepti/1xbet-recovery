"use client";
import About from "@/components/landing/about/About";
import SiteContent from "@/components/landing/content/SiteContent";
import Footer from "@/components/landing/footer/Footer";
import Header from "@/components/landing/headers/Header";
import Hero from "@/components/landing/hero/Hero";
import Sponsors from "@/components/landing/sponsors/Sponsors";
import TabBar from "./../components/landing/TabBar";
import SitePreLoader from "@/components/loaders/SitePreLoader";
import { useEffect, useState } from "react";
import Casino from "@/components/games/casino/Casino";
import Live from "@/components/games/live/Live";
import CricketSlider from "@/components/sports/CricketSlider";
import FootballSlider from "@/components/sports/FootballSlider";
import CompanyGames from "@/components/landing/CompanyGames";

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // window.addEventListener("load", () => {
    //   console.log("called")
    //   setPageLoaded(true);
    // });

    setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="bg-[#0B2B44] min-h-screen">
      <Header />
      <div className="container">
        <Hero />
        <CompanyGames />
        <CricketSlider />
        <FootballSlider />

        <div className="bg-white p-4 md:p-6 rounded-md shadow-sm">
          <Casino />
          <Live />
        </div>

        <SiteContent />
        <About />
        <Sponsors />
        <Footer />
      </div>
      <TabBar />

      {!pageLoaded && <SitePreLoader />}
    </div>
  );
}
