import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import { companyData } from "@/data/company";
import { navItems } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-blue-800 border border-amber-500/50 flex items-center justify-center text-white font-extrabold font-heading text-xl">
                SM
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-extrabold uppercase tracking-tight text-white">
                  SIDO MULJO
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                  KAROSERI & BODY REPAIR
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Bengkel spesialis Karoseri & Commercial Car Body Repair terpercaya di Sidoarjo. Mengutamakan presisi bodi, kekuatan sasis, dan ketepatan waktu.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigasi */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2 inline-block">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-500 text-xs">›</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Jam Operasional */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2 inline-block">
              Jam Operasional
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white">Senin - Sabtu</div>
                  <div className="text-slate-400">08.00 - 17.00 WIB</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-600 shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-slate-400">Minggu & Libur Nasional</div>
                  <div className="text-slate-500">Tutup (Layanan Darurat On-call)</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2 inline-block">
              Kontak Bengkel
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                <span>{companyData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${companyData.phone}`} className="hover:text-white transition-colors">
                  {companyData.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/kontak" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/kontak" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
