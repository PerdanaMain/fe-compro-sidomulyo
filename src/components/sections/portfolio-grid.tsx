import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { portfolioData } from "@/data/portfolio";

export function PortfolioGrid() {
  const displayItems = portfolioData.slice(0, 3);

  return (
    <section className="py-16 md:py-20 bg-[#f4f3ef]">
      <Container>
        {/* Header Section - Left Aligned */}
        <div className="max-w-2xl mb-8 md:mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
            Hasil Pekerjaan Kami
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Sebagian proyek perbaikan dan pembuatan bodi kendaraan yang telah kami selesaikan.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 md:mb-12">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md p-4 flex flex-col border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Container with inner padding/margin */}
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-slate-100 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Category Badge */}
              <div className="mb-2">
                <span className="bg-[#f5a623] text-slate-900 text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-sm tracking-wider inline-block">
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sans font-bold text-base text-slate-900 tracking-tight leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center bg-[#154ec1] hover:bg-[#103eb3] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors shadow-sm"
          >
            Lihat Semua Portfolio
          </Link>
        </div>
      </Container>
    </section>
  );
}
