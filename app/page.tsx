import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ServiceCards } from "@/components/ServiceCards";
import { WorksGrid } from "@/components/WorksGrid";
import { Strength } from "@/components/Strength";
import { Flow } from "@/components/Flow";
import { Price } from "@/components/Price";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServiceCards />
        <WorksGrid />
        <Strength />
        <Flow />
        <Price />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
