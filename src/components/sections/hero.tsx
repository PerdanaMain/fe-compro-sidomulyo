import React from "react";
import Image from "next/image";
import { ShieldCheck, Clock, Tag, Award, ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

export function Hero() {
  const quickStats = [
    { icon: ShieldCheck, title: "Armada Teruji", desc: "Standar pabrikan presisi" },
    { icon: Clock, title: "Pengerjaan Tepat Waktu", desc: "Timeline terpantau pasti" },
    { icon: Tag, title: "Harga Transparan", desc: "Tanpa biaya tersembunyi" },
    { icon: Award, title: "Garansi Mutu", desc: "Jaminan hasil pekerjaan" }
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-slate-950 text-white overflow-hidden pt-24 pb-12">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Sido Muljo Karoseri Workshop"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/90" />
      </div>

      {/* Main Hero Content */}
      <Container className="relative z-10 my-auto py-12">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              COMMERCIAL CAR BODY REPAIR
            </span>
          </div>

          {/* Heading H1 */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.08]">
            Truk Anda Kembali Ke Jalan, Bukan Ke Bengkel Lain
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
            Bengkel spesialis Karoseri & Commercial Car Body Repair di Sidoarjo. Kami menangani perbaikan bodi, sasis, hingga pembuatan karoseri custom dengan presisi tinggi dan jaminan garansi.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                "Halo Sido Muljo Karoseri, saya ingin konsultasi mengenai perbaikan armada truk."
              )}`}
              external
              variant="primary"
              size="lg"
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Hubungi Kami</span>
            </Button>
            <Button href="/layanan" variant="outline" size="lg" className="flex items-center gap-2">
              <span>Lihat Layanan</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </Container>

      {/* Floating Bottom Quick Features Bar */}
      <div className="relative z-10 border-t border-white/10 bg-slate-900/80 backdrop-blur-md mt-8">
        <Container className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-amber-500/40 transition-colors">
                <div className="w-11 h-11 rounded-full bg-blue-700/30 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
