import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { ShieldCheck, Award, Wrench, Users, CheckCircle2, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { companyData } from "@/data/company";
import { SITE_CONFIG } from "@/lib/config";
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

  const highlights = [
    {
      icon: ShieldCheck,
      title: "Presisi & Keamanan Sasis",
      desc: "Setiap pengerjaan sasis dan rangka karoseri diperhitungkan dengan kekuatan beban (payload) optimal sesuai standar regulasi Kemenhub."
    },
    {
      icon: Wrench,
      title: "Peralatan Hidrolik & Oven",
      desc: "Dilengkapi fasilitas press hidrolik modern dan spray booth oven suhu terkontrol untuk ketahanan cat maksimal terhadap iklim tropis."
    },
    {
      icon: Award,
      title: "Garansi Mutu Pekerjaan",
      desc: "Seluruh perbaikan bodi dan rekondisi kabin terlindungi oleh garansi resmi pengerjaan dari bengkel kami."
    },
    {
      icon: Users,
      title: "Teknisi Senior Berpengalaman",
      desc: "Tim tukang las, ketok, dan painter profesional yang berpengalaman lebih dari 10 tahun menangani ratusan unit armada."
    }
  ];

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
            eyebrow="PROFIL BENGKEL"
            title="Tentang Sido Mulyo Abadhi — Bengkel Karoseri & Perbaikan Bodi Truk"
            subtitle="Spesialis perbaikan bodi truk dan pembuatan karoseri commercial vehicle terpercaya di Sidoarjo & Surabaya, Jawa Timur."
          />
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-600 rounded text-xs font-bold uppercase tracking-wider">
              SEJARAH & KOMITMEN
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900">
              Mitra Handal Armada Niaga Anda Sejak 2012
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Berpusat di Krian, Sidoarjo, <strong className="text-slate-900 font-semibold">{companyData.name}</strong> didirikan dengan satu fokus utama: menyediakan layanan perbaikan bodi kendaraan komersial (commercial car body repair) dan fabrikasi karoseri yang presisi, tangguh, dan tepat waktu.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Kami memahami bahwa setiap hari armada truk Anda berada di bengkel adalah potensi kerugian operasional. Oleh karena itu, sistem manajemen pengerjaan kami dirancang untuk meminimalkan downtime kendaraan dengan tetap menjaga kualitas pengerjaan sesuai standar keselamatan jalan.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <div className="font-heading text-3xl font-extrabold text-blue-800">
                  {companyData.experienceYears}+ Tahun
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase mt-1">
                  Pengalaman Bengkel
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-slate-200">
                <div className="font-heading text-3xl font-extrabold text-blue-800">
                  {companyData.completedUnitsPerYear}+ Unit
                </div>
                <div className="text-xs text-slate-500 font-semibold uppercase mt-1">
                  Perbaikan / Tahun
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
            <Image
              src="/images/about-workshop.jpg"
              alt="Fasilitas Workshop Sido Mulyo Abadhi Krian Sidoarjo"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <SectionHeading
            eyebrow="KEUNGGULAN KAMI"
            title="Mengapa Memilih Bengkel Kami?"
            subtitle="Standar pengerjaan dan fasilitas pendukung yang menjamin hasil terbaik bagi investasi kendaraan niaga Anda."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <Card key={idx} className="p-6 bg-white border border-slate-200 space-y-4 hover:border-blue-700/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-800">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Location & Facility Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <Card className="lg:col-span-7 p-8 bg-slate-900 text-white space-y-6">
            <h3 className="font-heading text-2xl font-extrabold uppercase tracking-wide text-white border-b border-slate-800 pb-3">
              Fasilitas & Kapasitas Bengkel
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Area kerja luas yang mampu menampung hingga 15–20 unit truk besar bersamaan.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Peralatan las CO2, mesin potong bending plat hidrolik, dan alat tarik sasis modern.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Stok bahan baku plat besi tebal, pipa hollow, dan sparepart karoseri berkualitas.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Layanan konsultasi teknis gratis dan inspeksi awal kondisi kerusakan armada.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Button
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Halo Sido Mulyo Abadhi, saya ingin survey lokasi / konsultasi perbaikan armada."
                )}`}
                external
                variant="primary"
                size="md"
              >
                Konsultasi Pengerjaan Gratis
              </Button>
            </div>
          </Card>

          <Card className="lg:col-span-5 p-8 bg-white border border-slate-200 space-y-6">
            <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-slate-900 border-b border-slate-200 pb-3">
              Info Alamat & Kontak
            </h3>
            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-800 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">Alamat Workshop:</div>
                  <div>{companyData.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-800 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-slate-900">Jam Operasional:</div>
                  <div>{companyData.operatingHours}</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>

      <CtaBanner />
    </div>
  );
}
