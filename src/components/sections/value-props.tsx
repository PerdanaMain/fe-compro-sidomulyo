import React from "react";
import { Target, Clock, DollarSign, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

export function ValueProps() {
  const values = [
    {
      icon: Target,
      title: "Akurasi Presisi",
      desc: "Pengerjaan bodi & sasis presisi dengan alat standar pabrik serta tenaga ahli berpengalaman industri karoseri."
    },
    {
      icon: Clock,
      title: "Pengerjaan Tepat Waktu",
      desc: "Proses pengerjaan terpantau dengan timeline pasti, menekan waktu armada nganggur agar cepat kembali beroperasi."
    },
    {
      icon: DollarSign,
      title: "Harga Transparan",
      desc: "Rincian estimasi biaya terbuka tanpa ada biaya tersembunyi, sesuai dengan kesepakatan awal dan SPK."
    },
    {
      icon: ShieldCheck,
      title: "Garansi Mutu",
      desc: "Jaminan kualitas hasil pekerjaan, kekuatan las bodi, dan finishing pengecatan demi kepuasan penuh pemilik armada."
    }
  ];

  return (
    <section className="py-16 bg-slate-100 border-b border-slate-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <Card key={idx} className="p-6 flex flex-col items-start bg-white hover:border-blue-600/40">
              <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
