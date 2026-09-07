"use client";

import { Container } from "@/components/ui/container";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const heroImages = [
  { src: "/images/hero-bg.png", alt: "Karoseri dan Body Repair Sido Mulyo Abadhi" },
  { src: "/images/hero-bg-2.png", alt: "Karoseri Custom Sido Mulyo Abadhi" },
  { src: "/images/hero-bg-3.jpg", alt: "Rekondisi Truk Sido Mulyo Abadhi" },
  { src: "/images/hero-bg-4.png", alt: "Cat Oven dan Finishing Sido Mulyo Abadhi" },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-slate-950 text-white overflow-hidden pt-28 sm:pt-32 pb-12 sm:pb-16 select-none"
    >
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover object-center transition-transform duration-10000 ease-out"
            />
          </div>
        ))}

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-950/75 via-slate-950/40 to-transparent" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />
      </div>

      {/* Main Hero Content */}
      <Container className="relative z-30 my-auto py-8 sm:py-12">
        <div className="max-w-3xl space-y-6">
          {/* Heading H1 */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[74px] font-extrabold uppercase tracking-tight text-white leading-[1.02] max-w-3xl">
            Born to Repair, Built on Experience
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
            Sidomulyo Abadhi berkomitmen memberikan solusi pemulihan kendaraan komersial secara menyeluruh, dengan mengutamakan ketepatan pengerjaan, standar kualitas tinggi dan hasil akhir yang optimal.
          </p>
        </div>
      </Container>
    </section>
  );
}

