import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { servicesData } from "@/data/services";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Layanan Karoseri & Commercial Body Repair",
  description: "Daftar lengkap layanan spesialis perbaikan bodi truk, karoseri custom, rekondisi kabin, dan pengecatan oven di Sidoarjo dari Sido Muljo Karosen."
};

export default function LayananPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Layanan", item: "/layanan" }
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
            eyebrow="SOLUSI ARMADA KOMERSIAL"
            title="Layanan Bengkel Kami"
            subtitle="Kami menyediakan solusi lengkap perbaikan, pembuatan, dan perawatan bodi armada kendaraan niaga dengan standar kualitas tinggi."
          />
        </div>

        <div className="space-y-12 mb-16">
          {servicesData.map((service, idx) => (
            <Card
              key={service.id}
              className={`p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200 shadow-md ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-600 rounded text-xs font-bold uppercase tracking-wider">
                  SPESIALISASI {idx + 1}
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900">
                  {service.title}
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>

                <div className="pt-2">
                  <h4 className="font-heading text-sm font-bold uppercase text-slate-900 mb-3">
                    Keunggulan & Cakupan Pekerjaan:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    href={`/layanan/${service.slug}`}
                    variant="secondary"
                    size="md"
                    className="flex items-center gap-2"
                  >
                    <span>Lihat Detail Layanan</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>

      <CtaBanner />
    </div>
  );
}

