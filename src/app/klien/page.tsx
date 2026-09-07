import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { clientsData } from "@/data/clients";
import { companyData } from "@/data/company";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Klien & Pelanggan Perusahaan Armada",
  description: "Perusahaan ekspedisi, manufaktur, dan logistik yang memercayakan perawatan dan pembuatan bodi armada kepada Sido Mulyo Abadhi.",
  alternates: {
    canonical: "/klien"
  }
};

export default function KlienPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Klien", item: "/klien" }
  ]);

  const waUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
    "Halo Sido Mulyo Abadhi, kami berminat untuk bekerja sama / konsultasi perbaikan armada."
  )}`;

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-12 sm:pb-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto space-y-4">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Dipercaya Klien, Didukung <br className="hidden sm:inline" />
              Mitra Terbaik
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-normal">
              Sido Mulyo Abadhi bekerja sama dengan operator armada, pemasok material, dan mitra asuransi untuk memastikan setiap pengerjaan selesai dengan standar yang bisa dipertanggungjawabkan.
            </p>

            {/* Banner Image */}
            <div className="pt-4 overflow-hidden rounded-lg">
              <Image
                src="/images/client-meeting.jpg"
                alt="Dipercaya Klien, Didukung Mitra Terbaik"
                width={1200}
                height={600}
                className="w-full h-auto object-cover max-h-[520px] rounded-lg border border-slate-200/60 shadow-sm"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Client List Section */}
      <section className="py-16 md:py-20 bg-[#f4f6fa] border-t border-slate-100">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Section Heading */}
            <div className="text-center space-y-2 mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Armada Mereka, Kami yang Tangani
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
                Dari operator logistik hingga instansi, kami dipercaya menangani berbagai kebutuhan bodi kendaraan komersial.
              </p>
            </div>

            {/* Client Grid (3 columns x 2 rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientsData.slice(0, 6).map((client) => (
                <div
                  key={client.id}
                  className="bg-white rounded-lg p-8 sm:p-10 text-center shadow-xs border border-slate-200/50 flex items-center justify-center min-h-[110px] hover:shadow-md transition-all group"
                >
                  <span className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 tracking-wide group-hover:text-[#1546a0] transition-colors">
                    [Nama Klien]
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto rounded-lg bg-[#1546a0] text-white py-12 px-6 sm:px-12 text-center shadow-lg">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Siap Bermitra Bersama Kami?
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                Kami terbuka untuk bekerja sama dengan perusahaan dan pemilik armada yang membutuhkan solusi karoseri dan body repair yang dapat diandalkan.
              </p>
              <div className="pt-4 flex justify-center">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#fbbd08] hover:bg-[#e5ab00] text-slate-900 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-md transition-colors shadow-md"
                >
                  Konsultasikan Sekarang
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
