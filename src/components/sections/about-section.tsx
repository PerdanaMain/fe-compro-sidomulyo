import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { VisionMission } from "@/components/sections/vision-mission";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Text */}
          <div className="space-y-6">
            <SectionHeading
              eyebrow=""
              title="Tentang Kami"
              align="left"
              className="mb-6"
            />
            <p className="text-slate-600 leading-relaxed text-base">
              30 Years of Experience <strong className="text-slate-900 font-semibold">Sido Mulyo Abadhi</strong> telah menjadi bengkel spesialis pilihan bagi puluhan perusahaan armada logistik, manufaktur, dan transportasi di Jawa Timur.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              Selama lebih dari <strong className="text-slate-900 font-semibold">30 tahun</strong>, kami telah tumbuh melalui dedikasi dan pengalaman dalam bidang kendaraan komersial. Berawal dari keluarga yang telah lama berkarya dalam dunia perbaikan dan pengerjaan kendaraan komersial, dari pengalaman tersebut menjadi fondasi lahirnya <strong className="text-slate-900 font-semibold">Sido Mulyo Abadhi</strong> pada 2025 untuk menghadirkan layanan <strong className="text-slate-900 font-semibold">Commercial Vehicle Body Repair</strong> yang mengutamakan kualitas, ketelitian, dan keandalan. Kami percaya bahwa kualitas tidak hanya dibangun dari proses pengerjaan, tetapi juga dari pengalaman, ketelitian komitmen dan semangat untuk terus berkembang, kami berkomitmen menjadi mitra terpercaya bagi kebutuhan kendaraan komersial pelanggan hari ini dan untuk perjalanan yang lebih panjang ke depan.
            </p>

            <div className="pt-2 flex items-center gap-4">
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
              src="/images/about-bg.png"
              alt="Fasilitas Workshop Karoseri Truk Sido Mulyo Abadhi Krian Sidoarjo"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Vision & Mission Component at Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <VisionMission variant="white" />
        </div>
      </Container>
    </section>
  );
}
