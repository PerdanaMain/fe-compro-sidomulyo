import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Wrench,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";
import { portfolioData } from "@/data/portfolio";
import { generateBreadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = portfolioData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Portofolio Tidak Ditemukan",
    };
  }

  return {
    title: `${project.title} — Portofolio Sidomulyo Abadhi`,
    description: project.description || `Hasil pengerjaan karoseri dan body repair ${project.title} oleh Sidomulyo Abadhi Sidoarjo.`,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const project = portfolioData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Portofolio", item: "/portfolio" },
    { name: project.title, item: `/portfolio/${project.slug}` },
  ]);

  const relatedProjects = portfolioData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Container>
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke semua portofolio</span>
          </Link>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#fbbd08] text-slate-950 font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded">
              {project.category}
            </span>
            {project.year && (
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            )}
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
            {project.title}
          </h1>

          {project.description && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {project.description}
            </p>
          )}
        </div>

        {/* Main Content */}
        <div className="space-y-10">
          {/* Before & After Visual Slider */}
          <Card className="p-6 sm:p-8 bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="font-heading text-xl font-extrabold uppercase tracking-tight text-slate-900 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-700" />
                <span>Perbandingan Sebelum & Sesudah</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Lihat hasil transformasi pengerjaan armada secara langsung.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage={project.beforeImage || project.image}
              afterImage={project.afterImage || project.image}
              title={project.title}
            />
          </Card>
        </div>

        {/* Related Projects Section */}
        {relatedProjects.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="font-heading text-2xl font-extrabold uppercase text-slate-900 tracking-tight mb-8">
              Portofolio Lainnya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
