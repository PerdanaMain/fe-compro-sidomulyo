import React from "react";
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
  className?: string;
}

export function WhyChooseUs({
  title = "Mengapa Memilih Kami",
  subtitle = "Empat komitmen yang kami pegang di setiap pekerjaan, bukan sekadar janji promosi.",
  reasons = defaultReasons,
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
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-sm flex items-start gap-4 transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-[#154ec1]/10 text-[#154ec1] flex items-center justify-center shrink-0 mt-0.5">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading font-bold text-base text-slate-900">
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
      </Container>
    </section>
  );
}

