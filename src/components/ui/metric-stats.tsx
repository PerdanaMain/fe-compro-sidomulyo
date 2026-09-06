import React from "react";

export interface MetricItem {
  value: string;
  label: string;
}

interface MetricStatsProps {
  metrics: MetricItem[];
  className?: string;
}

export function MetricStats({ metrics, className = "" }: MetricStatsProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-slate-200/90 p-6 sm:p-8 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 ${className}`}
    >
      {metrics.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col space-y-1 ${
            idx > 0 ? "pt-4 sm:pt-0 sm:pl-8" : ""
          }`}
        >
          <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#154ec1] tracking-tight">
            {item.value}
          </span>
          <span className="text-xs sm:text-sm text-slate-600 font-medium leading-snug">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
