import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoWeHelp } from "@/components/WhoWeHelp";
import { Packages } from "@/components/Packages";
import { Portfolio } from "@/components/Portfolio";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BuiltWithTechnology } from "@/components/BuiltWithTechnology";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhoWeHelp />
      <Packages />
      <Portfolio />
      <HowItWorks />
      <WhyChooseUs />
      <BuiltWithTechnology />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
