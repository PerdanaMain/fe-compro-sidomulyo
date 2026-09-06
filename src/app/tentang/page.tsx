import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { MetricStats } from "@/components/ui/metric-stats";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBanner } from "@/components/sections/cta-banner";
import { companyData } from "@/data/company";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tentang Kami — Profil & Sejarah Workshop Karoseri",
  description: "Profil lengkap Sido Mulyo Abadhi Sidoarjo. Pengalaman 12+ tahun spesialis perbaikan bodi truk, pembuatan karoseri custom, dan rekondisi armada komersial.",
  alternates: {
    canonical: "/tentang"
  }
};

export default function TentangPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Tentang Kami", item: "/tentang" }
  ]);

  const metricsData = [
    { value: `${companyData.completedUnitsPerYear}+`, label: "Kendaraan Sudah Ditangani" },
    { value: `${companyData.experienceYears}`, label: "Tahun Berpengalaman di Bidang Ini" },
    { value: "4", label: "Layanan Bodi Kendaraan Komersial" }
  ];

  return (
    <div className="pt-24 md:pt-28 pb-0 bg-white min-h-screen text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Header Section */}
      <section className="py-8 md:py-12 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start max-w-6xl mx-auto mb-10">
            <div className="md:col-span-4">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-wide">
                Tentang Kami
              </h1>
            </div>
            <div className="md:col-span-8">
              <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                Sido Mulyo Abadhi berdiri di Krian, Sidoarjo, dengan fokus pada perbaikan dan pembuatan bodi kendaraan komersial. Kami menangani berbagai kebutuhan kendaraan yang digunakan untuk mendukung aktivitas operasional sehari-hari, mulai dari truk logistik hingga kendaraan angkutan. Seiring berkembangnya kebutuhan pelanggan, kami terus menjaga kualitas pengerjaan dan ketelitian di setiap kendaraan yang kami tangani.
              </p>
            </div>
          </div>

          {/* Metric Stats Bar */}
          <div className="max-w-6xl mx-auto mb-12">
            <MetricStats metrics={metricsData} />
          </div>

          {/* Banner Workshop Image with Centered Overlay Logo */}
          <div className="max-w-6xl mx-auto relative aspect-[21/9] sm:aspect-[3/1] rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 mb-8">
            <Image
              src="/images/about-workshop.jpg"
              alt="Fasilitas Workshop Sido Mulyo Abadhi"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
              className="object-cover object-center brightness-75"
            />
            {/* Centered Circular Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-slate-950/80 border-2 border-white/80 p-3 sm:p-4 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                <Image
                  src="/images/logo-footer.png"
                  alt="Sido Mulyo Abadhi Logo"
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mengapa Memilih Kami Section */}
      <WhyChooseUs />

      {/* Alur Pengerjaan Section */}
      <ProcessSteps />

      {/* CTA Banner Section */}
      <CtaBanner
        title="Pengalaman Kami, Untuk Kebutuhan Armada Anda"
        subtitle="Dengan pengalaman bertahun-tahun menangani berbagai kendaraan komersial, kami siap membantu Anda menemukan solusi yang tepat."
        buttonText="Konsultasi Sekarang"
        message="Halo Sido Mulyo Abadhi, saya ingin konsultasi mengenai kebutuhan armada kendaraan saya."
      />
    </div>
  );
}

