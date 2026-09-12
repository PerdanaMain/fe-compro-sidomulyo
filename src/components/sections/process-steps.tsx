"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Plus, Minus } from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessGroup {
  id: string;
  range: string;
  title: string;
  steps: ProcessStep[];
}

export const defaultProcessGroups: ProcessGroup[] = [
  {
    id: "g1",
    range: "01 – 04",
    title: "KONSULTASI & PERENCANAAN",
    steps: [
      {
        step: "01",
        title: "Konsultasi",
        description:
          "Sampaikan kondisi kendaraan dan kebutuhan pekerjaan kepada tim kami melalui WhatsApp, telepon, atau kunjungan langsung."
      },
      {
        step: "02",
        title: "Survei & Pemeriksaan",
        description:
          "Kami melakukan survei dan pemeriksaan kondisi kendaraan untuk mengidentifikasi kebutuhan pekerjaan secara menyeluruh."
      },
      {
        step: "03",
        title: "Estimasi & Penawaran",
        description:
          "Hasil pemeriksaan menjadi dasar penyusunan ruang lingkup pekerjaan, estimasi biaya, material, dan waktu pengerjaan."
      },
      {
        step: "04",
        title: "Review & Persetujuan",
        description:
          "Penawaran dibahas bersama customer hingga ruang lingkup, biaya, dan jadwal pekerjaan disepakati."
      }
    ]
  },
  {
    id: "g2",
    range: "05 – 08",
    title: "PENGERJAAN & PEMERIKSAAN",
    steps: [
      {
        step: "05",
        title: "Persiapan Pekerjaan",
        description:
          "Setelah persetujuan diterima, kami menyiapkan SPK, material, komponen, serta kebutuhan pengerjaan lainnya."
      },
      {
        step: "06",
        title: "Proses Pengerjaan",
        description:
          "Kendaraan ditangani sesuai layanan yang dipilih, meliputi Mechanical Repair, Karoseri Custom Body, Rekaroseri, atau Other Services, dengan tahapan pengerjaan yang disesuaikan dengan kondisi dan kebutuhan kendaraan."
      },
      {
        step: "07",
        title: "Quality Control",
        description:
          "Setiap hasil pekerjaan diperiksa untuk memastikan kualitas, fungsi, kekuatan, kerapian, dan kesesuaiannya dengan ruang lingkup pekerjaan."
      },
      {
        step: "08",
        title: "Final Inspection",
        description:
          "Pemeriksaan akhir dan dokumentasi dilakukan sebelum kendaraan dinyatakan siap diserahterimakan."
      }
    ]
  },
  {
    id: "g3",
    range: "09 – 12",
    title: "PENYELESAIAN",
    steps: [
      {
        step: "09",
        title: "Serah Terima",
        description:
          "Kendaraan diserahkan kepada customer disertai penjelasan mengenai hasil dan pekerjaan yang telah dilakukan."
      },
      {
        step: "10",
        title: "Invoicing & Pelunasan",
        description:
          "Dokumen penagihan diselesaikan sesuai dengan pekerjaan dan kesepakatan yang telah dibuat."
      },
      {
        step: "11",
        title: "After Sales Service",
        description:
          "Kami tetap memberikan layanan purna jual untuk memastikan hasil pekerjaan tetap terjaga setelah kendaraan kembali beroperasi."
      },
      {
        step: "12",
        title: "Case Closed",
        description:
          "Proses pengerjaan dan administrasi telah selesai secara penuh, armada siap beroperasi kembali."
      }
    ]
  }
];

interface ProcessStepsProps {
  overline?: string;
  title?: string;
  subtitle?: string;
  groups?: ProcessGroup[];
  className?: string;
}

export function ProcessSteps({
  overline = "ALUR PENGERJAAN",
  title = "Dua Belas Tahap yang Kami Lalui, dari Konsultasi Awal hingga Kendaraan Kembali Siap Beroperasi.",
  subtitle = "Setiap tahap kami jalankan dengan standar kerja yang jelas, komunikasi yang terbuka, dan tanggung jawab penuh terhadap hasilnya.",
  groups = defaultProcessGroups,
  className = "py-16 sm:py-20 bg-[#f4f7fc]/70 border-t border-slate-200/80"
}: ProcessStepsProps) {
  const [openStep, setOpenStep] = useState<string | null>("01");

  const toggleStep = (stepNumber: string) => {
    setOpenStep((prev) => (prev === stepNumber ? null : stepNumber));
  };

  return (
    <section className={className}>
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-left mb-10 sm:mb-12 space-y-2.5">
          {overline && (
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#154ec1]">
              {overline}
            </p>
          )}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl pt-1">
              {subtitle}
            </p>
          )}
        </div>

        {/* Groups & Accordion List */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {groups.map((group) => (
            <div key={group.id} className="space-y-3">
              {/* Group Sub-Header */}
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wider text-[#154ec1]">
                <span className="w-2 h-2 rounded-full bg-[#154ec1] inline-block"></span>
                <span>{group.range}</span>
                <span className="text-slate-300 mx-1">|</span>
                <span className="uppercase">{group.title}</span>
              </div>

              {/* Step Cards Container */}
              <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs divide-y divide-slate-100 overflow-hidden">
                {group.steps.map((item) => {
                  const isOpen = openStep === item.step;
                  return (
                    <div key={item.step} className="transition-colors">
                      <button
                        type="button"
                        onClick={() => toggleStep(item.step)}
                        className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/70 transition-colors focus:outline-none focus-visible:bg-slate-50"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center space-x-4">
                          <span
                            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-colors ${
                              isOpen
                                ? "bg-[#154ec1] text-white"
                                : "bg-slate-100 text-slate-700 border border-slate-200/60"
                            }`}
                          >
                            {item.step}
                          </span>
                          <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                            {item.title}
                          </span>
                        </div>
                        <div className="text-slate-500 p-1">
                          {isOpen ? (
                            <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
                          ) : (
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
                          )}
                        </div>
                      </button>

                      {/* Content panel when expanded */}
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-5 pt-1 pl-[3.25rem] sm:pl-[4rem] pr-6 sm:pr-12 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/30">
                          {item.description}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

