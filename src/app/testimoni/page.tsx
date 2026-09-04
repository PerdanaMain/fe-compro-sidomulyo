import React from "react";
import { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { testimonialsData } from "@/data/testimonials";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Testimoni Klien & Pelanggan",
  description: "Ulasan dan kebanggaan klien perusahaan armada logistik terhadap hasil pengerjaan bodi truk & karoseri Sido Muljo Karosen."
};

export default function TestimoniPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Testimoni", item: "/testimoni" }
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
            eyebrow="KEPUASAN KLIEN"
            title="Apa Kata Pelanggan Kami"
            subtitle="Kepercayaan pemilik armada dan fleet manager merupakan bukti komitmen kami terhadap kualitas, ketepatan waktu, dan garansi."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonialsData.map((t) => (
            <Card key={t.id} className="p-8 bg-white border border-slate-200 flex flex-col justify-between relative overflow-hidden">
              <Quote className="absolute -top-2 -right-2 w-24 h-24 text-slate-100 -z-0 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-700 italic text-base leading-relaxed">
                  "{t.content}"
                </p>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-800 text-white font-extrabold flex items-center justify-center text-lg font-heading">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 uppercase">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t.role} — <span className="font-semibold text-slate-700">{t.company}</span>
                  </p>
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

