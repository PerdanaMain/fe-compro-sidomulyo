import { Hero } from "@/components/sections/hero";
import { ValueProps } from "@/components/sections/value-props";
import { ServicesGrid } from "@/components/sections/services-grid";
import { AboutSection } from "@/components/sections/about-section";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { PartnersSection } from "@/components/sections/partners-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ServicesGrid />
      <AboutSection />
      <PortfolioGrid />
      <PartnersSection />
      <CtaBanner />
    </>
  );
}
