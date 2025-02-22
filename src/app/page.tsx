import About from "@/components/landing/about/About";
import SiteContent from "@/components/landing/content/SiteContent";
import Footer from "@/components/landing/footer/Footer";
import Header from "@/components/landing/headers/Header";
import Hero from "@/components/landing/hero/Hero";
import Sponsors from "@/components/landing/sponsors/Sponsors";

export default function Home() {
  return (
    <div className="bg-[#0B2B44] min-h-screen">
      <Header />
      <div className="container">
        <Hero />
        <SiteContent />
        <About />
        <Sponsors />
        <Footer />
      </div>
    </div>
  );
}
