"use client";

import React, { useState } from "react";
import { PortfolioCard } from "@/components/ui/portfolio-card";
import { portfolioData } from "@/data/portfolio";

export function PortfolioFilterClient() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "Semua" },
    { id: "body-repair", label: "Body Repair" },
    { id: "karoseri", label: "Custom Body" },
    { id: "rekondisi", label: "Reconditioning" },
    { id: "painting", label: "Finishing" }
  ];

  const filteredItems =
    filter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.categorySlug === filter);

  return (
    <>
      {/* Filter Categories Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 md:mb-12">
        {categories.map((cat) => {
          const isActive = filter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#154ec1] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Portfolio Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

