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
              <strong className="text-slate-900 font-semibold">Sidomulyo Abadhi</strong> lahir dari perjalanan keluarga kami selama lebih dari <strong className="text-slate-900 font-semibold">30 tahun</strong> di bidang kendaraan komersial. Berawal dari pengalaman bapak tercinta kami, <strong className="text-slate-900 font-semibold">Bapak Abdul Manap</strong>, dalam berbagai pekerjaan perbaikan dan pengerjaan kendaraan komersial, perjalanan tersebut kemudian diiringi bersama kakak kami tersayang, <strong className="text-slate-900 font-semibold">Achmad Rodhi</strong>, yang turut mendampingi dan mempelajari bidang ini secara langsung.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              Berbekal pengalaman yang dibangun serta semangat dan keberanian untuk melangkah bersama, lahirlah <strong className="text-slate-900 font-semibold">Sidomulyo Abadhi</strong> yang berdiri pada tahun 2025, untuk menghadirkan berbagai layanan kendaraan komersial, mulai dari Body Repair, Karoseri Custom Body, Rekaroseri hingga layanan lainnya. Dengan mengutamakan ketelitian dan kualitas, kami terus membawa pengalaman keluarga menjadi langkah untuk berkembang dan memberikan solusi bagi kebutuhan kendaraan komersial.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              Bagi kami, kualitas dibangun melalui pengalaman, ketelitian, komitmen, dan semangat untuk terus berkembang. Karena itu, kami berkomitmen menjadi mitra terpercaya bagi kebutuhan armada pelanggan hari ini dan untuk perjalanan yang lebih panjang ke depan.
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
              alt="Fasilitas Workshop Karoseri Truk Sidomulyo Abadhi Krian Sidoarjo"
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
