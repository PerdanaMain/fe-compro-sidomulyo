import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaBanner } from "@/components/sections/cta-banner";
import { PortfolioFilterClient } from "@/components/sections/portfolio-filter-client";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portofolio Pekerjaan Karoseri & Repair",
  description: "Dokumentasi hasil pengerjaan bodi truk, perbaikan sasis, dan pembuatan karoseri custom Sido Mulyo Abadhi di Sidoarjo.",
  alternates: {
    canonical: "/portfolio"
  }
};

export default function PortfolioPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Portofolio", item: "/portfolio" }
  ]);

  return (
    <div className="pt-28 pb-16 bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Container>
        <div className="py-8">
          <SectionHeading
            as="h1"
            eyebrow="REKAM JEJAK PEKERJAAN"
            title="Portofolio Pekerjaan Karoseri & Perbaikan Truk Sido Mulyo Abadhi"
            subtitle="Dokumentasi pengerjaan bodi truk, perbaikan sasis, dan pembuatan karoseri custom yang diselesaikan oleh tim profesional kami."
          />
        </div>

        <PortfolioFilterClient />
      </Container>

      <CtaBanner />
    </div>
  );
}
