import React from "react";
import { Container } from "@/components/ui/container";
import { partnersData } from "@/data/partners";

export function PartnersSection() {
  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <Container>
        <p className="text-center text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-10">
          Dipercaya oleh berbagai perusahaan komersial
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="py-6 px-4 bg-slate-50 border border-slate-200/60 rounded-lg text-center hover:border-blue-500/40 hover:bg-slate-100/80 transition-all duration-300 group"
            >
              <span className="font-heading text-xl font-extrabold tracking-wider text-slate-400 group-hover:text-slate-900 transition-colors uppercase">
                {partner.name}
              </span>
              <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tight">
                {partner.category}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
