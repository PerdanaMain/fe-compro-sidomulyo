import React from "react";
import { MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";

export function CtaBanner() {
  const waUrl = `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
    "Halo Sido Muljo Karoseri, saya berminat konsultasi perbaikan/pembuatan bodi armada."
  )}`;

  return (
    <section className="py-16 bg-slate-50">
      <Container>
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white p-10 md:p-16 shadow-2xl border border-blue-700/40 text-center overflow-hidden">
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Kebutuhan Armada? Serahkan Pada Ahlinya
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Konsultasikan kebutuhan perbaikan bodi, sasis, atau pembuatan karoseri custom armada Anda gratis bersama tim ahli kami.
            </p>
            <div className="pt-4 flex justify-center">
              <Button
                href={waUrl}
                external
                variant="primary"
                size="lg"
                className="flex items-center gap-2 shadow-xl"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat via WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
