"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { companyData } from "@/data/company";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export interface ServiceSlide {
  num: string;
  category: string;
  tabTitle: string;
  eyebrow: string;
  headline: string;
  description: string;
  bgImage: string;
  link: string;
}

export const serviceSlides: ServiceSlide[] = [
  {
    num: "01",
    category: "Body Repair",
    tabTitle: "Perbaikan Bodi",
    eyebrow: "COMMERCIAL CAR BODY REPAIR",
    headline: "TRUK ANDA KEMBALI KE JALAN, BUKAN KE BENGKEL LAIN",
    description:
      "Solusi karoseri dan body repair terpercaya untuk armada niaga Anda. Presisi industri, material kokoh, dan standar kualitas tinggi.",
    bgImage: "/images/hero-bg.png",
    link: "/layanan/commercial-car-body-repair",
  },
  {
    num: "02",
    category: "Custom Body",
    tabTitle: "Karoseri Custom",
    eyebrow: "CUSTOM TRUCK & CONTAINER BODY",
    headline: "RANCANG KAROSERI TRUK SESUAI KEBUTUHAN LOGISTIK",
    description:
      "Pembuatan box alumunium, wingbox, dump truck, dan karoseri custom berkekuatan tinggi serta berstandar keselamatan industri.",
    bgImage: "/images/service-reconditioning-2.png",
    link: "/layanan/karoseri-custom-body",
  },
  {
    num: "03",
    category: "Reconditioning",
    tabTitle: "Rekaroseri",
    eyebrow: "COMPLETE TRUCK RECONDITIONING",
    headline: "REKONDISI KABIN & SASIS TRUK RUSAK BERAT KEMBALI PRIMA",
    description:
      "Pemulihan menyeluruh armada bekas kecelakaan, penataan sasis, press body, dan penggantian komponen struktur utama secara presisi.",
    bgImage: "/images/service-karoseri-custom-2.png",
    link: "/layanan/rekondisi-reconditioning",
  },
  {
    num: "04",
    category: "Finishing",
    tabTitle: "Painting",
    eyebrow: "OVEN PAINTING & BRANDING",
    headline: "PENGECATAN STANDAR OVEN INDUSTRIAL & BRANDING FLEET",
    description:
      "Finishing bodi dengan teknologi cat oven anti karat durabilitas tinggi dan penyesuaian identitas visual livery perusahaan Anda.",
    bgImage: "/images/service-body-repair-2.png",
    link: "/layanan/painting-finishing",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % serviceSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const currentSlide = serviceSlides[activeIndex];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-between bg-slate-950 text-white overflow-hidden pt-28 sm:pt-32 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0 z-0">
        {serviceSlides.map((slide, index) => (
          <div
            key={slide.num}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
          >
            <Image
              src={slide.bgImage}
              alt={slide.headline}
              fill
              priority={index === 0}
              className="object-cover object-center transition-transform duration-10000 ease-out"
            />
          </div>
        ))}

        {/* Gradient Overlay for Text Legibility (Lighter & Cleaner) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
      </div>

      {/* Main Hero Content (Animated Keyed Slide) */}
      <Container className="relative z-30 my-auto py-8 sm:py-12">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow Tag with Gold Line */}
          <div className="space-y-2">
            <div className="w-36 h-[2px] bg-amber-500" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-amber-500 transition-all duration-300">
              {currentSlide.eyebrow}
            </p>
          </div>

          {/* Heading H1 */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[74px] font-extrabold uppercase tracking-tight text-white leading-[1.02] max-w-3xl min-h-[160px] sm:min-h-[220px] transition-all duration-500">
            {currentSlide.headline}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-xl font-normal min-h-[72px]">
            {currentSlide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                `Halo Sido Muljo Karosen, saya ingin konsultasi mengenai ${currentSlide.category}.`
              )}`}
              external
              variant="primary"
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded text-sm tracking-wider uppercase shadow-lg border border-amber-400/80 transition-all"
            >
              Hubungi Kami
            </Button>
            <Button
              href={currentSlide.link}
              variant="outline"
              size="lg"
              className="bg-black/30 hover:bg-white/10 text-white border border-white/60 font-semibold px-8 py-3.5 rounded text-sm tracking-wider uppercase transition-all"
            >
              Lihat Layanan
            </Button>
          </div>
        </div>
      </Container>

      {/* Bottom Service Strip Carousel Tabs */}
      <div className="relative z-30 border-t border-white/15 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent w-full mt-12">
        <Container className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {serviceSlides.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.num}
                  onClick={() => setActiveIndex(index)}
                  className="text-left focus:outline-none group relative pt-4 pb-6 flex flex-col justify-start transition-all cursor-pointer"
                >
                  {/* Top Indicator Line & Animated Progress Bar when active */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${isActive ? "bg-amber-500" : "bg-white/20 group-hover:bg-white/40"
                      }`}
                  >
                    {isActive && !isPaused && (
                      <div className="h-full bg-amber-300 w-full origin-left animate-[progress_6s_linear_infinite]" />
                    )}
                  </div>

                  <span
                    className={`font-heading text-xs font-bold uppercase tracking-wider transition-colors ${isActive ? "text-amber-400" : "text-slate-400 group-hover:text-slate-200"
                      }`}
                  >
                    {tab.num} · {tab.category}
                  </span>
                  <span
                    className={`font-sans text-sm sm:text-base font-bold mt-1 transition-colors ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                  >
                    {tab.tabTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}

