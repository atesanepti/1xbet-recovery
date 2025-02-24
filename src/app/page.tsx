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
        <Casino />
        <Live />
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
