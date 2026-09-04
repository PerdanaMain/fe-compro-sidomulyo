import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { partnersData } from "@/data/partners";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mitra Perusahaan Armada",
  description: "Perusahaan ekspedisi, manufaktur, dan logistik yang memercayakan perawatan armada kepada Sido Muljo Karosen."
};

export default function PartnerPage() {
  const breadcrumbLd = generateBreadcrumbSchema([
    { name: "Beranda", item: "/" },
    { name: "Partner", item: "/partner" }
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
            eyebrow="MITRA & REKANAN"
            title="Perusahaan Mitra Kami"
            subtitle="Kami bangga menjadi mitra strategis dalam menjaga kesiapan operasional armada niaga berbagai perusahaan terkemuka."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnersData.map((partner) => (
            <Card key={partner.id} className="p-8 bg-white border border-slate-200 text-center space-y-4 hover:border-blue-600/40">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-heading text-2xl font-extrabold text-blue-800">
                {partner.name.split(" ")[1] || "M"}
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-slate-900">
                {partner.name}
              </h3>
              <p className="text-xs text-slate-500 uppercase tracking-tight">
                {partner.category}
              </p>
            </Card>
          ))}
        </div>
      </Container>

      <CtaBanner />
    </div>
  );
}

