import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";

export function PortfolioGrid() {
  const displayItems = portfolioData.slice(0, 3);

  return (
    <section className="py-20 bg-slate-100 border-t border-slate-200">
      <Container>
        <SectionHeading
          eyebrow="REKAM JEJAK KAMI"
          title="Hasil Pekerjaan Kami"
          subtitle="Kumpulan hasil dokumentasi pengerjaan bodi truk, karoseri custom, dan restorasi armada yang kami tangani."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden bg-white border border-slate-200 flex flex-col">
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* BEFORE / AFTER Label Badge if isBeforeAfter */}
                {item.isBeforeAfter && (
                  <div className="absolute top-3 inset-x-3 flex justify-between z-10">
                    <span className="bg-red-700 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded shadow">
                      BEFORE
                    </span>
                    <span className="bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded shadow">
                      AFTER
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <Badge variant="amber" className="mb-2">
                    {item.category}
                  </Badge>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Klien: {item.client}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button href="/portfolio" variant="secondary" size="lg">
            Lihat Semua Portofolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
