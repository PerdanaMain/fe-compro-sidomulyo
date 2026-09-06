import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ServiceDetailCard } from "@/components/sections/service-detail-card";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Layanan Karoseri & Commercial Body Repair",
  description: "Daftar lengkap layanan spesialis perbaikan bodi truk, karoseri custom, rekondisi kabin, dan pengecatan oven di Sidoarjo dari Sido Mulyo Abadhi.",
  alternates: {
    canonical: "/layanan"
  }
};

export default function LayananPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Layanan", item: "/layanan" }
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
              Layanan Kami
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Solusi perbaikan bodi komersial dan karoseri custom terbaik dengan standar kualitas tinggi dan pengerjaan presisi.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List Section */}
      <section className="pb-16 bg-white">
        <Container>
          <div className="space-y-16 lg:space-y-20 max-w-6xl mx-auto">
            {servicesData.map((service, idx) => (
              <ServiceDetailCard
                key={service.id}
                service={service}
                index={idx}
                isLast={idx === servicesData.length - 1}
                whatsappNumber={companyData.whatsapp}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Preview Section */}
      <PortfolioGrid
        title="Hasil Pekerjaan Kami"
        subtitle="Temukan berbagai portofolio hasil pengerjaan karoseri dan perbaikan armada terbaik kami."
        limit={3}
        align="center"
        buttonText="Lihat Semua Portofolio"
        href="/portofolio"
      />

      {/* Call To Action (CTA) Banner Section */}
      <CtaBanner />
    </div>
  );
}



