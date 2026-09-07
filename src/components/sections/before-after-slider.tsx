"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeftRight, CheckCircle2, AlertCircle } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterSliderProps) {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  return (
    <div className="space-y-6">
      {/* Tab Switcher for Quick Mobile / Single View Toggle */}
      <div className="flex items-center justify-between bg-slate-200/80 p-1.5 rounded-xl max-w-md mx-auto sm:hidden">
        <button
          onClick={() => setActiveTab("before")}
          className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === "before"
              ? "bg-slate-900 text-white shadow-sm"
              : "text-slate-700 hover:text-slate-900"
          }`}
        >
          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>Sebelum</span>
        </button>
        <button
          onClick={() => setActiveTab("after")}
          className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
            activeTab === "after"
              ? "bg-[#1546a0] text-white shadow-sm"
              : "text-slate-700 hover:text-slate-900"
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Sesudah</span>
        </button>
      </div>

      {/* Mobile Display Single Frame based on Tab */}
      <div className="sm:hidden relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-slate-200">
        <Image
          src={activeTab === "before" ? beforeImage : afterImage}
          alt={`${title} - ${activeTab === "before" ? "Sebelum" : "Sesudah"}`}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`px-3 py-1.5 rounded-md text-xs font-black uppercase tracking-wider shadow-md text-white ${
              activeTab === "before" ? "bg-amber-600" : "bg-[#1546a0]"
            }`}
          >
            {activeTab === "before" ? "Sebelum Perbaikan" : "Hasil Akhir (Sesudah)"}
          </span>
        </div>
      </div>

      {/* Desktop Side-by-Side Comparison Grid */}
      <div className="hidden sm:grid grid-cols-2 gap-6">
        {/* Before Frame */}
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-slate-200 group">
          <Image
            src={beforeImage}
            alt={`${title} - Sebelum`}
            fill
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-slate-900/90 text-amber-400 border border-amber-500/40 px-3 py-1.5 rounded-md text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Sebelum</span>
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <p className="text-xs font-medium text-slate-200">Kondisi Awal / Kerusakan Bodi</p>
          </div>
        </div>

        {/* After Frame */}
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-blue-200 group">
          <Image
            src={afterImage}
            alt={`${title} - Sesudah`}
            fill
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-[#1546a0] text-white px-3 py-1.5 rounded-md text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Hasil Akhir (Sesudah)</span>
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <p className="text-xs font-medium text-slate-100">Selesai Dikerjakan & Siap Operasi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
