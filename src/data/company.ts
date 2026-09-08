import { SITE_CONFIG } from "@/lib/config";

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  experienceYears: number;
  completedUnitsPerYear: number;
  satisfactionRate: number;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  operatingHours: string;
  mapsEmbedUrl: string;
  vision: string;
  mission: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    tiktok: string;
  };
}

export const companyData: CompanyInfo = {
  name: SITE_CONFIG.name,
  shortName: "Sidomulyo Abadhi",
  tagline: "Commercial Vehicle Body Repair & Karoseri Specialist",
  experienceYears: 12,
  completedUnitsPerYear: 500,
  satisfactionRate: 98,
  phone: SITE_CONFIG.phone,
  whatsapp: SITE_CONFIG.whatsappNumber,
  email: SITE_CONFIG.email,
  address: "Jl. Bypass Krian KM 30, Kec. Krian, Kab. Sidoarjo, Jawa Timur",
  operatingHours: SITE_CONFIG.openingHours,
  mapsEmbedUrl: SITE_CONFIG.mapsEmbedUrl,
  vision: "Menjadi mitra terpercaya dalam perawatan, perbaikan kendaraan komersial dengan mengutamakan kualitas, ketepatan waktu, dan kepuasan pelanggan.",
  mission: "Memberikan solusi kebutuhan dan perawatan atau perbaikan kendaraan komersial yang sesuai kebutuhan pelanggan dengan mengutamakan kualitas, keandalan, dan pelayanan profesional. Kami terus meningkatkan kompetensi, teknologi dan proses kerja yang terukur, aman, dan bertanggung jawab untuk menghadirkan layanan yang transparan dan terpercaya.",
  socials: {
    instagram: "https://www.instagram.com/sidomulyoabadhi",
    facebook: "https://facebook.com/sidomulyoabadhi",
    youtube: "https://youtube.com/@sidomulyoabadhi",
    tiktok: "https://www.tiktok.com/@sidomulyoabadhi"
  }
};
