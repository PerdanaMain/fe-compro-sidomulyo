import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, FileText, Clock, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";

export interface ReasonItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const defaultReasons: ReasonItem[] = [
  {
    icon: Award,
    title: "Pengalaman",
    description:
      "Berbekal pengalaman dalam menangani berbagai kebutuhan kendaraan komersial dengan standar pengerjaan yang mengutamakan ketepatan pengerjaan, standar kualitas tinggi dan hasil akhir yang optimal."
  },
  {
    icon: ShieldCheck,
    title: "Garansi Pengerjaan",
    description:
      "Setiap pekerjaan kami kerjakan dengan standar kualitas yang terukur dan didukung garansi sesuai dengan ketentuan yang berlaku."
  },
  {
    icon: FileText,
    title: "Harga Transparan",
    description:
      "Penawaran disampaikan secara rinci dan transparan sebelum pekerjaan dimulai."
  },
  {
    icon: Clock,
    title: "Tepat Waktu",
    description:
      "Pengerjaan mengikuti jadwal yang telah disepakati untuk membantu menjaga armada siap beroperasi."
  }
];

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  reasons?: ReasonItem[];
  images?: string[];
  className?: string;
}

export function WhyChooseUs({
  title = "Mengapa Memilih Kami",
  subtitle = "Empat komitmen yang kami pegang di setiap pekerjaan, bukan sekadar janji promosi.",
  reasons = defaultReasons,
  images = ["/images/about-workshop.jpg", "/images/service-body-repair.png"],
  className = "py-16 sm:py-20 bg-[#f4f7fc] border-t border-slate-200"
}: WhyChooseUsProps) {
  return (
    <section className={className}>
      <Container>
        {/* Header Section */}
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

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-stretch">
          {/* Left Column - 4 Reason Cards */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {reasons.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 sm:p-5 border border-slate-200/80 shadow-sm flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#154ec1]/10 text-[#154ec1] flex items-center justify-center shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - 2 Stacked Images */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {images.slice(0, 2).map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-slate-900 shadow-sm border border-slate-200 flex-1"
              >
                <Image
                  src={imgSrc}
                  alt={`Workshop Sidomulyo Abadhi ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
