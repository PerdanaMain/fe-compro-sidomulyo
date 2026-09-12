import React from "react";
import { Shield, Check, CircleDollarSign, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";

export function ValueProps() {
  const values = [
    {
      icon: <Shield className="w-6 h-6 stroke-[2.2]" />,
      title: "Pengalaman",
      desc: "Berbekal pengalaman dalam menangani berbagai kebutuhan kendaraan komersial dengan standar pengerjaan yang mengutamakan ketepatan pengerjaan, standar kualitas tinggi dan hasil akhir yang optimal.",
    },
    {
      icon: <Check className="w-6 h-6 stroke-[2.5]" />,
      title: "Garansi Pengerjaan",
      desc: "Setiap pekerjaan kami kerjakan dengan standar kualitas yang terukur dan didukung garansi sesuai dengan ketentuan yang berlaku.",
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 stroke-[2.2]" />,
      title: "Harga Transparan",
      desc: "Penawaran disampaikan secara rinci dan transparan sebelum pekerjaan dimulai.",
    },
    {
      icon: <Clock className="w-6 h-6 stroke-[2.2]" />,
      title: "Tepat Waktu",
      desc: "Pengerjaan mengikuti jadwal yang telah disepakati untuk membantu menjaga armada siap beroperasi.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f5f5f3]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 bg-white border border-slate-200/90 rounded-xl shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col h-full items-start justify-start"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-900/10 text-[#1e3a8a] flex items-center justify-center mb-6 shrink-0">
                {item.icon}
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
