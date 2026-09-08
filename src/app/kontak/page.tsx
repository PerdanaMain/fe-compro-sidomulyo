import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { companyData } from "@/data/company";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Hubungi Kami — Sidomulyo Abadhi | Bengkel Karoseri Sidoarjo",
  description: "Baik untuk konsultasi cepat maupun kebutuhan armada besar, ada beberapa cara menghubungi kami. Pilih yang paling nyaman buat Anda.",
  alternates: {
    canonical: "/kontak"
  }
};

export default function KontakPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Kontak", item: "/kontak" }
  ]);

  const waUrl = getWhatsAppUrl();

  return (
    <div className="pt-28 pb-16 bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Container>
        {/* Header Title & Subtitle Section */}
        <div className="pt-4 pb-10 max-w-3xl">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
            Ceritakan Kebutuhan Anda, Kami yang Atur Sisanya
          </h1>
          <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed mt-6 max-w-xl">
            Baik untuk konsultasi cepat maupun kebutuhan armada besar, ada beberapa cara menghubungi kami.
            <br />
            Pilih yang paling nyaman buat Anda.
          </p>
        </div>

        {/* Hero Banner Image */}
        <div className="w-full relative rounded-xl overflow-hidden shadow-sm mb-12 bg-slate-100 aspect-[16/9] md:aspect-[21/9]">
          <Image
            src="/images/contact-hero.jpg"
            alt="Tim Customer Service Sidomulyo Abadhi"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* 3 Contact Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: WhatsApp */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 text-slate-900">
                <MessageSquare className="w-6 h-6 fill-slate-900 text-slate-900" />
                <h2 className="font-heading font-extrabold text-xl text-slate-900">
                  WhatsApp
                </h2>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mt-4 min-h-[40px]">
                Respon tercepat — biasanya dalam hitungan menit di jam kerja.
              </p>
              <p className="font-bold text-slate-900 text-sm mt-4">
                {companyData.whatsapp.startsWith("62")
                  ? `0${companyData.whatsapp.slice(2).replace(/(\d{4})(\d{4})(\d+)/, "$1-$2-$3")}`
                  : companyData.whatsapp}
              </p>
            </div>
            <div className="mt-8 pt-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-bold text-sm hover:underline group"
              >
                <span>Chat Sekarang</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 2: Telepon */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 text-slate-900">
                <Phone className="w-6 h-6 fill-slate-900 text-slate-900" />
                <h2 className="font-heading font-extrabold text-xl text-slate-900">
                  Telepon
                </h2>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mt-4 min-h-[40px]">
                Untuk Anda yang lebih suka bicara langsung dengan tim kami.
              </p>
              <p className="font-bold text-slate-900 text-sm mt-4">
                {companyData.phone}
              </p>
            </div>
            <div className="mt-8 pt-4">
              <a
                href={`tel:${companyData.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-bold text-sm hover:underline group"
              >
                <span>Hubungi Sekarang</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-3 text-slate-900">
                <Mail className="w-6 h-6 fill-slate-900 text-slate-900" />
                <h2 className="font-heading font-extrabold text-xl text-slate-900">
                  Email
                </h2>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mt-4 min-h-[40px]">
                Untuk kebutuhan yang perlu lampiran dokumen atau foto banyak.
              </p>
              <p className="font-bold text-slate-900 text-sm mt-4 truncate">
                {companyData.email}
              </p>
            </div>
            <div className="mt-8 pt-4">
              <a
                href={`mailto:${companyData.email}`}
                className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-bold text-sm hover:underline group"
              >
                <span>Kirim Email</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
