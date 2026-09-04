import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          eyebrow="SPESIALISASI KAMI"
          title="Layanan Kami"
          subtitle="Berbagai opsi perbaikan bodi, fabrikasi karoseri custom, hingga perawatan eksterior untuk armada kendaraan komersial Anda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {servicesData.map((service) => (
            <Card key={service.id} className="group overflow-hidden flex flex-col sm:flex-row bg-white border border-slate-200">
              <div className="relative w-full sm:w-2/5 min-h-[220px] bg-slate-900 shrink-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-heading text-xl font-extrabold uppercase tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/layanan/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-amber-500 transition-colors mt-2"
                >
                  <span>Lihat Detail Layanan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button href="/layanan" variant="secondary" size="lg">
            Lihat Semua Layanan
          </Button>
        </div>
      </Container>
    </section>
  );
}
