import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Detailing from "@/components/Detailing";
import FeaturedWork from "@/components/FeaturedWork";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-black">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedWork />
      <Detailing />
      <WhyUs />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
