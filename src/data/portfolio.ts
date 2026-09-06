export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  client?: string;
  year?: string;
  description?: string;
  isBeforeAfter?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Box Cargo Medium - Hino 300",
    category: "BODY REPAIR",
    categorySlug: "body-repair",
    image: "/images/service-body-repair-2.png",
    client: "PT Transportindo Jaya",
    year: "2026"
  },
  {
    id: "port-2",
    title: "Box Pendingin Medium - Isuzu Traga",
    category: "REKONDISI",
    categorySlug: "rekondisi",
    image: "/images/service-karoseri-custom-2.png",
    client: "PT Logistics Express",
    year: "2026"
  },
  {
    id: "port-3",
    title: "Rekondisi Tank 24.000L",
    category: "REKONDISI",
    categorySlug: "rekondisi",
    image: "/images/service-reconditioning-2.png",
    client: "CV Energi Nusantara",
    year: "2026"
  },
  {
    id: "port-4",
    title: "Rekondisi Tank 24.000L",
    category: "REKONDISI",
    categorySlug: "rekondisi",
    image: "/images/service-reconditioning.png"
  },
  {
    id: "port-5",
    title: "Box Cargo Medium - Hino 300",
    category: "CUSTOM BODY",
    categorySlug: "karoseri",
    image: "/images/service-karoseri-custom.png"
  },
  {
    id: "port-6",
    title: "Rekondisi Tank 24.000L",
    category: "REKONDISI",
    categorySlug: "rekondisi",
    image: "/images/service-reconditioning-2.png"
  },
  {
    id: "port-7",
    title: "Box Pendingin Medium - Isuzu Traga",
    category: "CUSTOM BODY",
    categorySlug: "karoseri",
    image: "/images/service-body-repair.png"
  },
  {
    id: "port-8",
    title: "Box Pendingin Medium - Isuzu Traga",
    category: "FINISHING",
    categorySlug: "painting",
    image: "/images/service-painting.png"
  },
  {
    id: "port-9",
    title: "Box Pendingin Medium - Fuso FE74L",
    category: "CUSTOM BODY",
    categorySlug: "karoseri",
    image: "/images/service-karoseri-custom-2.png"
  },
  {
    id: "port-10",
    title: "Rekondisi Bak Truk Long",
    category: "REKONDISI",
    categorySlug: "rekondisi",
    image: "/images/service-reconditioning.png"
  },
  {
    id: "port-11",
    title: "Tangki Stainless Steel - UD Kuzer",
    category: "BODY REPAIR",
    categorySlug: "body-repair",
    image: "/images/service-body-repair-2.png"
  },
  {
    id: "port-12",
    title: "Box Pendingin Medium - Fuso FE74L",
    category: "FINISHING",
    categorySlug: "painting",
    image: "/images/service-karoseri-custom.png"
  }
];

