import { AboutSection } from "@/components/sections/about-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Hero } from "@/components/sections/hero";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ValueProps } from "@/components/sections/value-props";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ServicesGrid />
      <AboutSection />
      <PortfolioGrid />
      <CtaBanner />
    </>
  );
}
