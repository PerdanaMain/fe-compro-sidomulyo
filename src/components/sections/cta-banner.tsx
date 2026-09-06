import React from "react";
import { Container } from "@/components/ui/container";
import { companyData } from "@/data/company";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  message?: string;
}

export function CtaBanner({
  title = "Kebutuhan Armada? Serahkan Pada Ahlinya",
  subtitle = "Karoseri dan body repair yang dikerjakan dengan pengalaman, ketelitian, dan komitmen",
  buttonText = "Chat via WhatsApp",
  message = "Halo Sido Mulyo Abadhi, saya berminat konsultasi perbaikan/pembuatan bodi armada."
}: CtaBannerProps) {
  const waUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-12 sm:py-16 bg-white">
      <Container>
        <div className="max-w-6xl mx-auto rounded-lg bg-[#154ec1] text-white py-12 px-6 sm:px-12 text-center shadow-lg">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-white">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
              {subtitle}
            </p>
            <div className="pt-3 flex justify-center">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#fbbd08] hover:bg-[#e5ab00] text-slate-900 font-bold text-xs sm:text-sm px-7 py-3 rounded-md transition-colors shadow-sm"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

