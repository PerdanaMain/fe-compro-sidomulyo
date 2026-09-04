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
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export const companyData: CompanyInfo = {
  name: SITE_CONFIG.name,
  shortName: "Sido Muljo",
  tagline: "Commercial Car Body Repair & Karoseri Specialist",
  experienceYears: 12,
  completedUnitsPerYear: 500,
  satisfactionRate: 98,
  phone: SITE_CONFIG.phone,
  whatsapp: SITE_CONFIG.whatsappNumber,
  email: SITE_CONFIG.email,
  address: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.province} ${SITE_CONFIG.address.postalCode}`,
  operatingHours: SITE_CONFIG.openingHours,
  socials: {
    instagram: "https://instagram.com/sidomuljokarosen",
    facebook: "https://facebook.com/sidomuljokarosen",
    youtube: "https://youtube.com/@sidomuljokarosen"
  }
};

