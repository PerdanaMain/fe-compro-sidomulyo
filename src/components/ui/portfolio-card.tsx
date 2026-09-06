import React from "react";
import Image from "next/image";
import { PortfolioItem } from "@/data/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

export function PortfolioCard({ item, className = "" }: PortfolioCardProps) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200/80 flex flex-col group hover:shadow-md transition-shadow ${className}`}
    >
      <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          <span className="inline-block bg-[#fbbd08] text-slate-900 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider mb-2">
            {item.category}
          </span>
          <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 line-clamp-1">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
