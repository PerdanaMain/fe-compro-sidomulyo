import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { ServiceItem } from "@/data/services";

export interface ServiceDetailCardProps {
  service: ServiceItem;
  index: number;
  isLast?: boolean;
  whatsappNumber: string;
}

export function ServiceDetailCard({
  service,
  index,
  isLast = false,
  whatsappNumber
}: ServiceDetailCardProps) {
  const isEven = index % 2 === 1;
  const waServiceUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo Sido Mulyo Abadhi, saya berminat konsultasi mengenai layanan ${service.title}.`
  )}`;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        !isLast ? "border-b border-slate-200/80 pb-16 lg:pb-20" : ""
      }`}
    >
      {/* Service Image */}
      <div
        className={`lg:col-span-6 relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-slate-900 shadow-sm border border-slate-200 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={service.image}
          alt={`${service.title} — Sido Mulyo Abadhi`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>

      {/* Service Content */}
      <div
        className={`lg:col-span-6 space-y-4 ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {/* Title */}
        <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase text-slate-900 tracking-tight">
          {service.number} — {service.title}
        </h2>

        {/* Full Description */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          {service.fullDescription}
        </p>

        {/* Highlight Card / Catatan */}
        {service.highlightText && (
          <div className="bg-[#f0f5ff] border border-blue-100 rounded-md p-3.5 sm:p-4 text-xs sm:text-sm">
            <div className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              Deskripsi Tambahan
            </div>
            <p className="text-slate-700 leading-relaxed">
              {service.highlightText}
            </p>
          </div>
        )}

        {/* Checklist Section */}
        {service.features && service.features.length > 0 && (
          <div className="pt-1">
            <h3 className="font-heading text-sm sm:text-base font-bold uppercase text-slate-900 mb-2.5 tracking-tight">
              Ruang Lingkup Pekerjaan
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#154ec1] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-3">
          <a
            href={waServiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#154ec1] hover:bg-[#113ea0] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-md shadow-sm transition-colors"
          >
            Konsultasikan Kebutuhan Anda
          </a>
        </div>
      </div>
    </div>
  );
}
