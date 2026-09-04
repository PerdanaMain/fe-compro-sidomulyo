import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CheckCircle2, ArrowLeft, MessageSquare, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const serviceLd = generateServiceSchema(service);
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Layanan", item: "/layanan" },
    { name: service.title, item: `/layanan/${service.slug}` }
  ]);

  const waUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
    `Halo Sido Muljo Karosen, saya ingin konsultasi mengenai layanan ${service.title}.`
  )}`;

  return (
    <div className="pt-28 pb-16 bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Container>
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke semua layanan</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Detail Content */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="p-8 bg-white border border-slate-200">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-slate-900 mb-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-slate-900 mb-4">
                {service.title}
              </h1>

              <p className="text-lg text-slate-700 leading-relaxed font-normal mb-6">
                {service.fullDescription}
              </p>

              <div className="border-t border-slate-200 pt-6 space-y-4">
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-slate-900">
                  Fitur & Layanan Termasuk:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-slate-50 border border-slate-200 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-800">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar CTA Box */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6 bg-slate-900 text-white border border-slate-800 space-y-6">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white border-b border-slate-800 pb-3">
                Konsultasi Layanan Ini
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Butuh estimasi biaya & lama pengerjaan untuk armada Anda? Hubungi customer service atau tim teknis kami sekarang.
              </p>
              <div className="space-y-3 pt-2">
                <Button
                  href={waUrl}
                  external
                  variant="primary"
                  size="md"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat via WhatsApp</span>
                </Button>
                <Button
                  href={`tel:${companyData.phone}`}
                  variant="outline"
                  size="md"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Telepon Bengkel</span>
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-white border border-slate-200 space-y-4">
              <h4 className="font-heading text-lg font-bold uppercase text-slate-900">
                Jam Operasional
              </h4>
              <p className="text-sm text-slate-600">
                {companyData.operatingHours}
              </p>
              <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
                Lokasi: {companyData.address}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

