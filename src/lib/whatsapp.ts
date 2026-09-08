import { companyData } from "@/data/company";

export const DEFAULT_WA_MESSAGE =
  "Halo Sidomulyo Abadhi, saya ingin bertanya info lokasi / konsultasi perbaikan armada.";

/**
 * Generates a WhatsApp chat URL with encoded custom message or default message.
 */
export function getWhatsAppUrl(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(message)}`;
}
