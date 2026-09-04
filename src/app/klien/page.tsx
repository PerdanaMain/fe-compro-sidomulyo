import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { clientsData } from "@/data/clients";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Klien & Pelanggan Perusahaan Armada",
  description: "Perusahaan ekspedisi, manufaktur, dan logistik yang memercayakan perawatan dan pembuatan bodi armada kepada Sido Mulyo Abadhi."
};

export default function KlienPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Klien", item: "/klien" }
  ]);

  return (
    <div className="pt-28 pb-16 bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Container>
        <div className="py-8">
          <SectionHeading
            eyebrow="KLIEN & PELANGGAN"
            title="Klien Perusahaan Kami"
            subtitle="Kami bangga dipercaya sebagai mitra perawatan dan pembuatan karoseri armada niaga berbagai perusahaan terkemuka."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clientsData.map((client) => (
            <Card key={client.id} className="p-8 bg-white border border-slate-200 text-center space-y-4 hover:border-blue-600/40">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-heading text-2xl font-extrabold text-blue-800">
                {client.name.charAt(0)}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-slate-900">
                {client.name}
              </h3>
              <p className="text-xs text-slate-500 uppercase tracking-tight">
                {client.category}
              </p>
            </Card>
          ))}
        </div>
      </Container>

      <CtaBanner />
    </div>
  );
}
