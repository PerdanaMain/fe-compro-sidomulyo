import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

export function AboutSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Text */}
          <div className="space-y-6">
            <SectionHeading
              eyebrow="REPUTASI & PENGALAMAN"
              title="Tentang Kami"
              align="left"
              className="mb-6"
            />
            <p className="text-slate-600 leading-relaxed text-base">
              Berdiri lebih dari 12 tahun di Sidoarjo, <strong className="text-slate-900 font-semibold">Sido Muljo Karosen</strong> telah menjadi bengkel spesialis pilihan bagi puluhan perusahaan armada logistik, manufaktur, dan transportasi di Jawa Timur.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              Kami menggabungkan teknisi berpengalaman, teknologi fabrikasi hidrolik modern, dan standar kontrol kualitas ketat untuk menjamin setiap armada yang keluar dari bengkel kami aman, tangguh, dan estetik di jalanan.
            </p>

            {/* Stat Counters */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
              <div>
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-blue-800 tracking-tight">
                  {companyData.completedUnitsPerYear}+
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">
                  Armada Diperbaiki / Tahun
                </div>
              </div>
              <div>
                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-blue-800 tracking-tight">
                  {companyData.experienceYears}+
                </div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-500 mt-1">
                  Tahun Pengalaman Industri
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button href="/tentang" variant="secondary" size="md">
                Tentang Kami
              </Button>
              <Button href="/kontak" variant="outline" size="md" className="!text-slate-900 !border-slate-300 hover:!bg-slate-100">
                Hubungi Bengkel
              </Button>
            </div>
          </div>

          {/* Right Column Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3]">
            <Image
              src="/images/about-workshop.jpg"
              alt="Sido Muljo Karosen Workshop Facility"
              fill
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
