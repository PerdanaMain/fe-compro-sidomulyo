import React from "react";
import { Metadata } from "next";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hubungi & Lokasi Workshop Bengkel",
  description: "Alamat lokasi workshop Sido Muljo Karosen Krian Sidoarjo, nomor telepon hotline, WhatsApp, dan jam operasional."
};

export default function KontakPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Kontak", item: "/kontak" }
  ]);

  const waUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
    "Halo Sido Muljo Karosen, saya ingin bertanya info lokasi / konsultasi perbaikan armada."
  )}`;

  return (
    <div className="pt-28 pb-16 bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Container>
        <div className="py-8">
          <SectionHeading
            eyebrow="LOKASI & AKSES"
            title="Hubungi Bengkel Kami"
            subtitle="Kunjungi lokasi bengkel kami di Krian, Sidoarjo atau hubungi tim customer service kami untuk konsultasi dan penawaran harga."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 bg-white border border-slate-200 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase text-slate-900">
                    Alamat Workshop
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">
                    {companyData.address}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-slate-200 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase text-slate-900">
                    Telepon & WhatsApp
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Kantor: <a href={`tel:${companyData.phone}`} className="font-semibold text-slate-900 hover:text-blue-700">{companyData.phone}</a>
                  </p>
                  <p className="text-sm text-slate-600">
                    WhatsApp Hotline: <a href={waUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:underline">+{companyData.whatsapp}</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-slate-200 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase text-slate-900">
                    Jam Operasional
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">
                    {companyData.operatingHours}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Minggu & Libur Nasional: Tutup (Emergency Call Available)
                  </p>
                </div>
              </div>
            </Card>

            <div className="pt-2">
              <Button
                href={waUrl}
                external
                variant="primary"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Hubungi via WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Box */}
          <div className="lg:col-span-7">
            <Card className="p-2 bg-white border border-slate-200 h-full min-h-[400px] flex flex-col">
              <div className="w-full h-full min-h-[380px] rounded overflow-hidden relative bg-slate-200">
                <iframe
                  title={`Lokasi ${companyData.name} Krian Sidoarjo`}
                  src={companyData.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "380px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

