import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { companyData } from "@/data/company";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 2.137.672 4.116 1.82 5.74L2.343 21.657l4.053-1.455C8.005 21.328 9.932 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.84 0-3.551-.523-5.006-1.428l-.359-.222-2.428.871.876-2.383-.243-.377C3.882 15.006 3.333 13.553 3.333 12c0-4.787 3.88-8.667 8.667-8.667s8.667 3.88 8.667 8.667S16.787 20 12 20z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .56.04.82.12V9.38a6.37 6.37 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.64a6.34 6.34 0 0 0 10.86 4.47V12a8.28 8.28 0 0 0 5.73 2.26V10.8a4.83 4.83 0 0 1-3.77-1.41V6.69z" />
    </svg>
  );
}

const footerNavItems = [
  { label: "Layanan", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Partners", href: "/klien" },
];

export function Footer() {
  return (
    <footer className="bg-[#f4f3ef] text-slate-700 py-12 md:py-16 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12">
          {/* Column 1: Brand & Address */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-footer.png"
                height={42}
                width={42}
                alt={companyData.name}
                className="object-contain"
              />
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 uppercase">
                SIDO MULYO ABADHI
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Jl. Bypass Krian KM 30, Kec. Krian,
              <br />
              Kab. Sidoarjo, Jawa Timur
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={`https://wa.me/${companyData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full border border-slate-800/80 flex items-center justify-center text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-slate-800/80 flex items-center justify-center text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full border border-slate-800/80 flex items-center justify-center text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigasi */}
          <div className="space-y-3 md:pl-4">
            <h3 className="font-heading font-bold text-base text-slate-900 tracking-wide">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {footerNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-slate-900 transition-colors block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Jam Operasional */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-base text-slate-900 tracking-wide">
              Jam Operasional
            </h3>
            <div className="space-y-1 text-sm text-slate-600">
              <p>Senin – Sabtu</p>
              <p>08.00 – 17.00 WIB</p>
            </div>
          </div>

          {/* Column 4: Kontak */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-base text-slate-900 tracking-wide">
              Kontak
            </h3>
            <div className="space-y-1.5 text-sm text-slate-600">
              <p>
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-slate-900 transition-colors"
                >
                  {companyData.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${companyData.phone.replace(/[^0-9]/g, "")}`}
                  className="hover:text-slate-900 transition-colors"
                >
                  {companyData.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-slate-300/60 text-center">
          <p className="text-xs text-slate-600 font-normal">
            © {new Date().getFullYear()} Sido Mulyo Abadhi. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
