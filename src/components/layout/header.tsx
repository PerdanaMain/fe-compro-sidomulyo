"use client";

import { companyData } from "@/data/company";
import { navItems } from "@/data/navigation";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/80 ${scrolled ? "py-3 shadow-sm" : "py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              height={40}
              width={40}
              alt={companyData.name}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-heading text-xs font-bold uppercase tracking-widest transition-all relative py-1.5 ${isActive
                      ? "text-[#1546a0] border-b-2 border-[#1546a0]"
                      : "text-slate-600 hover:text-[#1546a0]"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA (Outline WHATSAPP Button matching mockup) */}
          <div className="hidden lg:flex items-center">
            <a
              href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                "Halo Sido Mulyo Abadhi, saya ingin bertanya mengenai perbaikan armada."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#1546a0] text-[#1546a0] hover:bg-[#1546a0] hover:text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>CHAT WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 hover:text-slate-900 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-heading text-sm font-bold uppercase tracking-wider py-2 border-b border-slate-100 ${isActive ? "text-[#1546a0] font-extrabold" : "text-slate-700"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="pt-2">
              <a
                href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                  "Halo Sido Mulyo Abadhi, saya ingin berkonsultasi."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-[#1546a0] text-[#1546a0] text-xs font-bold uppercase tracking-wider rounded bg-blue-50/50"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>CHAT WHATSAPP</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
