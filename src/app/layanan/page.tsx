import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { servicesData } from "@/data/services";
import { portfolioData } from "@/data/portfolio";
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

  const defaultWaUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
    "Halo Sido Mulyo Abadhi, saya berminat konsultasi perbaikan/pembuatan bodi armada."
  )}`;

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
            {servicesData.map((service, idx) => {
              const isEven = idx % 2 === 1;
              const waServiceUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                `Halo Sido Mulyo Abadhi, saya berminat konsultasi mengenai layanan ${service.title}.`
              )}`;

              return (
                <div
                  key={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    idx !== servicesData.length - 1 ? "border-b border-slate-200/80 pb-16 lg:pb-20" : ""
                  }`}
                >
                  {/* Service Image */}
                  <div
                    className={`lg:col-span-6 relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-slate-900 shadow-sm border border-slate-200 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={`${service.title} — Sido Mulyo Abadhi`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Service Content */}
                  <div
                    className={`lg:col-span-6 space-y-4 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Title */}
                    <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase text-slate-900 tracking-tight">
                      {service.number} — {service.title}
                    </h2>

                    {/* Full Description */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Highlight Card / Catatan */}
                    <div className="bg-[#f0f5ff] border border-blue-100 rounded-md p-3.5 sm:p-4 text-xs sm:text-sm">
                      <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
                        Deskripsi Tambahan
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        {service.highlightText}
                      </p>
                    </div>

                    {/* Checklist Section */}
                    <div className="pt-1">
                      <h3 className="font-heading text-sm sm:text-base font-bold uppercase text-slate-900 mb-2.5 tracking-tight">
                        Ruang Lingkup Pekerjaan
                      </h3>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#154ec1] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="pt-3">
                      <a
                        href={waServiceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-[#154ec1] hover:bg-[#113ea0] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-md shadow-sm transition-colors"
                      >
                        Konsultasikan Kebutuhan Anda
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 sm:py-20 bg-[#f4f7fc] border-t border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-wide">
              Hasil Pekerjaan Kami
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Temukan berbagai portofolio hasil pengerjaan karoseri dan perbaikan armada terbaik kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {portfolioData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200/80 flex flex-col group hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <span className="inline-block bg-[#fbbd08] text-slate-900 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/portofolio"
              className="inline-flex items-center justify-center bg-[#154ec1] hover:bg-[#113ea0] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-md shadow-sm transition-colors"
            >
              Lihat Semua Portofolio
            </Link>
          </div>
        </Container>
      </section>

      {/* Call To Action (CTA) Banner Section */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="max-w-6xl mx-auto rounded-lg bg-[#154ec1] text-white py-12 px-6 sm:px-12 text-center shadow-lg">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white">
                Butuh Solusi untuk Armada Anda?
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                Tim spesialis kami siap membantu konsultasi perbaikan maupun pembuatan bodi armada kendaraan komersial Anda.
              </p>
              <div className="pt-3 flex justify-center">
                <a
                  href={defaultWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#fbbd08] hover:bg-[#e5ab00] text-slate-900 font-bold text-xs sm:text-sm px-6 py-3 rounded-md transition-colors shadow-sm"
                >
                  Kontak WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}


