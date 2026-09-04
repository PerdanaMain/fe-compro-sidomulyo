import React from "react";
import { Container } from "@/components/ui/container";
import { companyData } from "@/data/company";

export function CtaBanner() {
  const waUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
    "Halo Sido Mulyo Abadhi, saya berminat konsultasi perbaikan/pembuatan bodi armada."
  )}`;

  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="rounded-lg bg-[#154ec1] text-white py-16 px-6 sm:px-12 md:px-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white leading-tight">
              Kebutuhan Armada? Serahkan Pada Ahlinya
            </h2>
            <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl mx-auto">
              Karoseri dan body repair yang dikerjakan dengan pengalaman, ketelitian, dan komitmen
            </p>
            <div className="pt-4 flex justify-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#fbbd08] hover:bg-[#e5ab00] text-white font-bold text-sm sm:text-base px-7 py-3 rounded-md transition-colors shadow-sm"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
