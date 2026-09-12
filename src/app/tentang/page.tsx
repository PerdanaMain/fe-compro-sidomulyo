import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MetricStats } from "@/components/ui/metric-stats";
import { VisionMission } from "@/components/sections/vision-mission";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBanner } from "@/components/sections/cta-banner";
import { companyData } from "@/data/company";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tentang Kami — Profil & Sejarah Workshop Karoseri",
  description: "Profil lengkap Sidomulyo Abadhi Sidoarjo. Pengalaman 30 tahun spesialis perbaikan bodi truk, pembuatan karoseri custom, dan rekondisi armada komersial.",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Column Text */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow=""
                title="Tentang Kami"
                align="left"
                className="mb-6"
              />
              <p className="text-slate-600 leading-relaxed text-base">
                <strong className="text-slate-900 font-semibold">Sidomulyo Abadhi</strong> lahir dari perjalanan keluarga kami selama lebih dari <strong className="text-slate-900 font-semibold">30 tahun</strong> di bidang kendaraan komersial. Berawal dari pengalaman bapak tercinta kami, <strong className="text-slate-900 font-semibold">Bapak Abdul Manap</strong>, dalam berbagai pekerjaan perbaikan dan pengerjaan kendaraan komersial, perjalanan tersebut kemudian diiringi bersama kakak kami tersayang, <strong className="text-slate-900 font-semibold">Achmad Rodhi</strong>, yang turut mendampingi dan mempelajari bidang ini secara langsung.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Berbekal pengalaman yang dibangun serta semangat dan keberanian untuk melangkah bersama, lahirlah <strong className="text-slate-900 font-semibold">Sidomulyo Abadhi</strong> yang berdiri pada tahun 2025, untuk menghadirkan berbagai layanan kendaraan komersial, mulai dari Mechanical Repair, Karoseri Custom Body, Rekaroseri hingga layanan lainnya. Dengan mengutamakan ketelitian dan kualitas, kami terus membawa pengalaman keluarga menjadi langkah untuk berkembang dan memberikan solusi bagi kebutuhan kendaraan komersial.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                Bagi kami, kualitas dibangun melalui pengalaman, ketelitian, komitmen, dan semangat untuk terus berkembang. Karena itu, kami berkomitmen menjadi mitra terpercaya bagi kebutuhan armada pelanggan hari ini dan untuk perjalanan yang lebih panjang ke depan.
              </p>
            </div>

            {/* Right Column Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3]">
              <Image
                src="/images/about-bg.png"
                alt="Fasilitas Workshop Karoseri Truk Sidomulyo Abadhi Krian Sidoarjo"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>


          {/* Vision & Mission Cards Grid */}
          <VisionMission variant="slate" className="max-w-6xl mx-auto pt-4" />
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
        message="Halo Sidomulyo Abadhi, saya ingin konsultasi mengenai kebutuhan armada kendaraan saya."
      />
    </div>
  );
}

