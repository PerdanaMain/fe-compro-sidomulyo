import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { companyData } from "@/data/company";
import { ArrowRight, MessageSquare } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const statNumbers = [
    { value: `${companyData.completedUnitsPerYear}+`, label: "Service Body / Tahun" },
    { value: `${companyData.experienceYears}+`, label: "Tahun Pengalaman" },
    { value: `${companyData.satisfactionRate}%`, label: "Kepuasan Klien" },
    { value: "100%", label: "Garansi Mutu Hasil" }
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-slate-950 text-white overflow-hidden pt-24 pb-12">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Sido Muljo Karosen Workshop"
          fill
          priority
          className="object-cover object-center"
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
                "Halo Sido Muljo Karosen, saya ingin konsultasi mengenai perbaikan armada truk."
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

      {/* Floating Bottom Quick Numbers Bar (Mockup Style) */}
      <div className="relative z-10 border-t border-white/10 bg-slate-900/80 backdrop-blur-md mt-8">
        <Container className="py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {statNumbers.map((stat, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? "sm:pl-6" : ""} flex flex-col justify-center`}>
                <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-300 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

