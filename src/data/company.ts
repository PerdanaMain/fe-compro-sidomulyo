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
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export const companyData: CompanyInfo = {
  name: "Sido Muljo Karosen",
  shortName: "Sido Muljo",
  tagline: "Commercial Car Body Repair & Karoseri Specialist",
  experienceYears: 12,
  completedUnitsPerYear: 500,
  satisfactionRate: 98,
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "info@sidomuljokaroseri.com",
  address: "Jl. Raya Sidoarjo No. 123, Candi, Sidoarjo, Jawa Timur 61271",
  operatingHours: "Senin - Sabtu: 08:00 - 17:00 WIB",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com"
  }
};
