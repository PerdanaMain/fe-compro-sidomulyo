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
    title: "Box Cargo Medium - Hino 300",
    category: "BODY REPAIR",
    categorySlug: "body-repair",
    image: "/images/service-body-repair-2.png",
    client: "PT Transportindo Jaya",
    year: "2026",
    description: "Perbaikan bodi box cargo medium Hino 300 dengan presisi dan kekuatan struktur teruji."
  },
  {
    id: "port-2",
    title: "Box Pendingin Medium - Isuzu Traga",
    category: "RECONDITIONING",
    categorySlug: "rekondisi",
    image: "/images/service-karoseri-custom-2.png",
    client: "PT Logistics Express",
    year: "2026",
    description: "Rekondisi bodi box pendingin medium armada Isuzu Traga."
  },
  {
    id: "port-3",
    title: "Rekondisi Tank 24.000L",
    category: "RECONDITIONING",
    categorySlug: "rekondisi",
    image: "/images/service-reconditioning-2.png",
    client: "CV Energi Nusantara",
    year: "2026",
    description: "Rekondisi total bodi dan sasis tangki kapasitas 24.000 Liter."
  }
];
