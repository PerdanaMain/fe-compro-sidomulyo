export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  client: string;
  year: string;
  description: string;
  isBeforeAfter?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Perbaikan Kabin - Dump Truck",
    category: "BODY REPAIR",
    categorySlug: "body-repair",
    image: "/images/service-body-repair.jpg",
    client: "PT Transportindo Jaya",
    year: "2026",
    description: "Perbaikan penyok berat bagian kanan kabin dan pengelasan sasis depan akibat benturan proyek tambang."
  },
  {
    id: "port-2",
    title: "Wingbox Custom - Isuzu GIGA",
    category: "KAROSERI CUSTOM",
    categorySlug: "karoseri",
    image: "/images/service-karoseri-custom.jpg",
    client: "PT Logistics Express Indonesia",
    year: "2026",
    description: "Pembuatan Karoseri Wingbox Alumunium 9.5 Meter dengan sistem hidrolik otomatis ganda."
  },
  {
    id: "port-3",
    title: "Rekondisi Total - Mitsubishi Fuso",
    category: "REKONDISI & CAT",
    categorySlug: "rekondisi",
    image: "/images/service-reconditioning.jpg",
    client: "CV Ekspedisi Sidoarjo",
    year: "2025",
    description: "Restorasi total kabin tua, perbaikan plat keropos, dan pengecatan ulang oven warna biru metalik.",
    isBeforeAfter: true
  },
  {
    id: "port-4",
    title: "Pengecatan Livery Fleet - Scania R450",
    category: "PAINTING & FINISHING",
    categorySlug: "painting",
    image: "/images/service-painting.jpg",
    client: "PT Trans Haulage Nusantara",
    year: "2025",
    description: "Pengecatan Oven PU 2-Tone Orange & Blue Metallic disertai aplikasi lapisan anti-karat chassis."
  }
];
