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
      "Anda menghubungi kami via WhatsApp atau telepon dan menjelaskan kondisi kendaraan atau kebutuhan bodi yang ingin dibuat."
  },
  {
    step: "02",
    title: "Survei",
    description:
      "Kami mengecek kondisi kendaraan secara langsung — di lokasi Anda atau di bengkel kami, mana yang lebih memungkinkan."
  },
  {
    step: "03",
    title: "Penawaran",
    description:
      "Anda menerima rincian biaya dan estimasi waktu pengerjaan secara tertulis, sebelum memutuskan untuk melanjutkan."
  },
  {
    step: "04",
    title: "Pengerjaan",
    description:
      "Setelah disepakati, pengerjaan dimulai sesuai jadwal yang ditentukan di awal."
  },
  {
    step: "05",
    title: "Quality Control",
    description:
      "Setiap bagian kendaraan diperiksa ulang sebelum diserahkan — mulai dari kekuatan struktur, kerapian pengecatan, hingga fungsi kelengkapan."
  },
  {
    step: "06",
    title: "Serah Terima",
    description:
      "Kami menyerahkan hasil bersama Anda, menjelaskan apa saja yang dikerjakan, dan kendaraan siap kembali beroperasi."
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
  subtitle = "Enam tahap yang kami lalui untuk setiap kendaraan, dari kontak pertama sampai kendaraan kembali ke tangan Anda.",
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

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
