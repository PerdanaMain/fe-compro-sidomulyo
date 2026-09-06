import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { portfolioData } from "@/data/portfolio";

interface PortfolioGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  align?: "left" | "center";
  buttonText?: string;
  href?: string;
  className?: string;
}

export function PortfolioGrid({
  title = "Hasil Pekerjaan Kami",
  subtitle = "Temukan berbagai portofolio hasil pengerjaan karoseri dan perbaikan armada terbaik kami.",
  limit = 3,
  align = "center",
  buttonText = "Lihat Semua Portofolio",
  href = "/portofolio",
  className = "py-16 sm:py-20 bg-[#f4f7fc] border-t border-slate-200"
}: PortfolioGridProps) {
  const displayItems = portfolioData.slice(0, limit);

  return (
    <section className={className}>
      <Container>
        {/* Header Section */}
        <div
          className={`max-w-3xl mb-10 space-y-2 ${
            align === "center" ? "mx-auto text-center" : "text-left"
          }`}
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {displayItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom CTA Button */}
        {buttonText && href && (
          <div className="text-center">
            <Link
              href={href}
              className="inline-flex items-center justify-center bg-[#154ec1] hover:bg-[#113ea0] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-md shadow-sm transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}

