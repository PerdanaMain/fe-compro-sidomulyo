import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PortfolioFilterClient } from "@/components/sections/portfolio-filter-client";
import { CtaBanner } from "@/components/sections/cta-banner";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hasil Pekerjaan & Portofolio Karoseri",
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
    <div className="pt-24 md:pt-28 pb-0 bg-white min-h-screen text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Page Header */}
      <section className="py-8 md:py-12 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-wide">
              Hasil Pekerjaan Kami
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Sebagian proyek perbaikan dan pembuatan bodi kendaraan yang telah kami selesaikan.
            </p>
          </div>
        </Container>
      </section>

      {/* Portfolio Filter & Grid Section */}
      <section className="pb-16 bg-white">
        <Container>
          <PortfolioFilterClient />
        </Container>
      </section>

      {/* CTA Banner Section */}
      <CtaBanner
        title="Punya Kebutuhan Serupa?"
        subtitle="Ceritakan kondisi dan kebutuhan kendaraan Anda. Tim kami siap membantu menemukan solusi yang tepat."
        buttonText="Konsultasi via WhatsApp"
        message="Halo Sido Mulyo Abadhi, saya ingin konsultasi mengenai kebutuhan armada kendaraan saya."
      />
    </div>
  );
}

