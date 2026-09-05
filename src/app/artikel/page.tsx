import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Calendar, ArrowRight, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/sections/cta-banner";
import { articlesData } from "@/data/articles";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Artikel & Panduan Karoseri Truk",
  description: "Kumpulan artikel teknis, estimasi biaya wingbox, panduan SRUT, tips perawatan bodi truk, dan solusi body repair dari Sido Mulyo Abadhi Sidoarjo.",
  alternates: {
    canonical: "/artikel"
  }
};

export default function ArtikelPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Artikel & Panduan", item: "/artikel" }
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
            as="h1"
            eyebrow="Wawasan & Tips Karoseri"
            title="Artikel & Panduan Karoseri Truk Sido Mulyo Abadhi"
            subtitle="Informasi praktis seputar estimasi biaya wingbox, panduan SRUT, teknik body repair, dan perawatan bodi armada komersial."
          />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articlesData.map((article) => (
            <Card
              key={article.id}
              className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group"
            >
              <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                <Image
                  src={article.image}
                  alt={`${article.title} — Sido Mulyo Abadhi Sidoarjo`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="amber">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                    <Link href={`/artikel/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-400" />
                    {article.author}
                  </span>

                  <Link
                    href={`/artikel/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <span>Baca</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
