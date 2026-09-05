import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, User, MessageSquare, Phone, CheckCircle2, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articlesData } from "@/data/articles";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { SITE_CONFIG } from "@/lib/config";
import { generateBreadcrumbSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articlesData.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  return {
    title: `${article.title} | ${SITE_CONFIG.name}`,
    description: article.metaDescription,
    alternates: {
      canonical: `/artikel/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      url: `${SITE_CONFIG.url}/artikel/${article.slug}`,
      images: [
        {
          url: article.image,
          alt: article.title
        }
      ]
    }
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const article = articlesData.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Artikel & Panduan", item: "/artikel" },
    { name: article.title, item: `/artikel/${article.slug}` }
  ]);

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.metaDescription,
    "image": `${SITE_CONFIG.url}${article.image}`,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.url
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/images/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/artikel/${article.slug}`
    }
  };

  const faqLd = article.faqs && article.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const relatedService = article.relatedServiceSlug
    ? servicesData.find((s) => s.slug === article.relatedServiceSlug)
    : null;

  const otherArticles = articlesData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const waUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
    `Halo Sido Mulyo Abadhi, saya membaca artikel "${article.title}" dan ingin berkonsultasi mengenai armada kami.`
  )}`;

  return (
    <div className="pt-28 pb-16 bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <Container>
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke daftar artikel</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-8">
            <Card className="p-6 sm:p-10 bg-white border border-slate-200">
              {/* Article Header Meta */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Badge variant="amber">
                    {article.category}
                  </Badge>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {article.pillar === "komersial" ? "Panduan Komersial" : "Panduan Edukatif"}
                  </span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-slate-900 leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-b border-slate-100 py-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-blue-700" />
                    <strong>{article.author}</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Main Featured Image */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 mb-8 shadow-md">
                <Image
                  src={article.image}
                  alt={`${article.title} — Bengkel Karoseri Sido Mulyo Abadhi`}
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Article Summary Box */}
              <div className="p-5 bg-amber-500/10 border-l-4 border-amber-500 rounded-r-lg mb-8 text-slate-800 text-base leading-relaxed italic font-medium">
                {article.summary}
              </div>

              {/* Body Sections */}
              <div className="space-y-8 text-slate-700 leading-relaxed text-base">
                {article.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-slate-900 border-b border-slate-100 pb-2">
                      {section.heading}
                    </h2>
                    {section.content.map((pText, pIdx) => (
                      <p key={pIdx} className="leading-relaxed">
                        {pText}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              {article.faqs && article.faqs.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200 space-y-6">
                  <div className="flex items-center gap-2 text-blue-800 font-heading text-2xl font-bold uppercase">
                    <HelpCircle className="w-6 h-6" />
                    <h2>Pertanyaan Sering Diajukan (FAQ)</h2>
                  </div>
                  <div className="space-y-4">
                    {article.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
                        <h3 className="font-heading text-base font-bold text-slate-900">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Service Internal Link Banner */}
              {relatedService && (
                <div className="mt-10 p-6 bg-slate-900 text-white rounded-xl space-y-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs uppercase font-extrabold text-amber-500 tracking-wider">
                      LAYANAN TERKAIT BENGKEL KAMI
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white uppercase">
                      {relatedService.title}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {relatedService.shortDescription}
                    </p>
                  </div>
                  <Button
                    href={`/layanan/${relatedService.slug}`}
                    variant="primary"
                    size="md"
                    className="shrink-0"
                  >
                    Lihat Layanan
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Sidebar CTA & Other Articles */}
          <div className="lg:col-span-4 space-y-6">
            {/* Consultation CTA Box */}
            <Card className="p-6 bg-slate-900 text-white border border-slate-800 space-y-6">
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white border-b border-slate-800 pb-3">
                Konsultasi Pengerjaan Truk
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ingin konsultasi mengenai estimasi biaya karoseri wingbox, perbaikan bodi, atau rekondisi kabin armada Anda?
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
                  <span>Chat WhatsApp Tim Teknis</span>
                </Button>
                <Button
                  href={`tel:${companyData.phone}`}
                  variant="outline"
                  size="md"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Telepon Workshop ({companyData.phone})</span>
                </Button>
              </div>
            </Card>

            {/* Other Articles List */}
            <Card className="p-6 bg-white border border-slate-200 space-y-4">
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-slate-900 border-b border-slate-100 pb-3">
                Artikel Terkait Lainnya
              </h3>
              <div className="space-y-4">
                {otherArticles.map((other) => (
                  <div key={other.id} className="space-y-1 group">
                    <span className="text-[10px] font-extrabold uppercase text-amber-600">
                      {other.category}
                    </span>
                    <h4 className="font-heading text-sm font-bold text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                      <Link href={`/artikel/${other.slug}`}>
                        {other.title}
                      </Link>
                    </h4>
                    <p className="text-xs text-slate-500">
                      {other.date}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
