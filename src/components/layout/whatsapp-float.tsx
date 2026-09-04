"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { companyData } from "@/data/company";

export function WhatsAppFloat() {
  const waUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
    "Halo Sido Muljo Karoseri, saya ingin konsultasi mengenai armada truk saya."
  )}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-400/40 group"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping"></span>
      </div>
      <span className="hidden sm:inline font-heading font-bold text-xs uppercase tracking-wider">
        Chat via WhatsApp
      </span>
    </a>
  );
}
