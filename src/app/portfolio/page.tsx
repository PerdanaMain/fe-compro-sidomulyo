"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/sections/cta-banner";
import { portfolioData } from "@/data/portfolio";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "SEMUA PORTOFOLIO" },
    { id: "body-repair", label: "BODY REPAIR" },
    { id: "karoseri", label: "KAROSERI CUSTOM" },
    { id: "rekondisi", label: "REKONDISI & CAT" },
    { id: "painting", label: "PAINTING & FINISHING" }
  ];

  const filteredItems = filter === "all"
    ? portfolioData
    : portfolioData.filter((item) => item.categorySlug === filter);

  return (
    <div className="pt-28 pb-16 bg-slate-50">
      <Container>
        <div className="py-8">
          <SectionHeading
            eyebrow="REKAM JEJAK PEKERJAAN"
            title="Portofolio Bengkel"
            subtitle="Dokumentasi pengerjaan bodi truk, perbaikan sasis, dan pembuatan karoseri custom yang diselesaikan oleh tim profesional kami."
          />
        </div>

        {/* Filter Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? "bg-blue-800 text-white shadow-md border border-blue-700"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden bg-white border border-slate-200 flex flex-col">
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

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
                  <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Klien: {item.client}</span>
                  <span>Tahun: {item.year}</span>
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
