import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { clientsData } from "@/data/clients";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Klien & Pelanggan Perusahaan Armada",
  description: "Perusahaan ekspedisi, manufaktur, dan logistik yang memercayakan perawatan dan pembuatan bodi armada kepada Sidomulyo Abadhi.",
  alternates: {
    canonical: "/klien"
  }
};

export default function KlienPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Klien", item: "/klien" }
  ]);

  const waUrl = getWhatsAppUrl(
    "Halo Sidomulyo Abadhi, kami berminat untuk bekerja sama / konsultasi perbaikan armada."
  );

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Container>
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Dipercaya Klien &amp; Mitra Terbaik
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Dari operator logistik hingga instansi, kami dipercaya menangani berbagai kebutuhan bodi kendaraan komersial.
          </p>
        </div>

        {/* Client Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl p-6 sm:p-8 text-center border border-slate-200/90 shadow-xs flex flex-col items-center justify-center min-h-[130px] hover:shadow-md transition-all group"
            >
              <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 tracking-wide group-hover:text-[#1546a0] transition-colors">
                {client.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 font-normal">
                {client.category}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto rounded-xl bg-[#1546a0] text-white py-12 px-6 sm:px-12 text-center shadow-lg">
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
    </div>
  );
}

