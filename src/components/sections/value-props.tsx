import React from "react";
import { Shield, Check, CircleDollarSign, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";

export function ValueProps() {
  const values = [
    {
      icon: (
        <Shield className="w-6 h-6 text-[#1e3a8a] fill-[#1e3a8a]" />
      ),
      title: "Pengalaman",
      desc: "Menangani armada niaga di Jawa Timur, dari truk logistik sampai bus operator.",
    },
    {
      icon: (
        <Check className="w-6 h-6 text-[#1e3a8a] stroke-[3]" />
      ),
      title: "Garansi Pengerjaan",
      desc: "Setiap pekerjaan bodi dan cat kami jamin — kembali bila ada yang perlu diperbaiki.",
    },
    {
      icon: (
        <CircleDollarSign className="w-6 h-6 text-[#1e3a8a] fill-[#1e3a8a] stroke-white" />
      ),
      title: "Harga Transparan",
      desc: "Penawaran rinci sebelum pengerjaan dimulai, tanpa biaya tersembunyi di tengah jalan.",
    },
    {
      icon: (
        <Clock className="w-6 h-6 text-[#1e3a8a] fill-[#1e3a8a] stroke-white" />
      ),
      title: "Tepat Waktu",
      desc: "Jadwal disepakati di awal dan kami pegang — armada berhenti berarti kerugian bagi Anda.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#f5f5f3]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-slate-200/90 rounded-md shadow-xs flex flex-col justify-between items-start min-h-[230px]"
            >
              <div className="mb-6">{item.icon}</div>
              <div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
