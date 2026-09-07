import React from "react";
import { Container } from "@/components/ui/container";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

const defaultSteps: ProcessStep[] = [
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
  },
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
      "Kendaraan ditangani sesuai layanan yang dipilih, meliputi Body Repair, Karoseri Custom Body, Rekaroseri, atau Reconditioning, dengan tahapan pengerjaan yang disesuaikan dengan kondisi dan kebutuhan kendaraan."
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
  },
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
];

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  className?: string;
}

export function ProcessSteps({
  title = "Alur Pengerjaan",
  subtitle = "Tahapan terstruktur yang kami lalui untuk setiap kendaraan, dari kontak pertama hingga layanan purna jual.",
  steps = defaultSteps,
  className = "py-16 sm:py-20 bg-white border-t border-slate-200"
}: ProcessStepsProps) {
  return (
    <section className={className}>
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-wide">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 12 Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-5 border border-slate-200/90 shadow-sm flex flex-col space-y-2 hover:shadow-md transition-shadow"
            >
              <div className="w-8 h-8 rounded-full bg-[#154ec1] text-white flex items-center justify-center font-extrabold text-xs mb-1">
                {item.step}
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
