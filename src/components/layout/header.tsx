"use client";

import { Button } from "@/components/ui/button";
import { companyData } from "@/data/company";
import { navItems } from "@/data/navigation";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar - Info Kontak */}
      <div className="hidden lg:block bg-slate-950/90 text-slate-300 text-xs border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{companyData.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>{companyData.operatingHours}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${companyData.phone}`}
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold">{companyData.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "bg-gradient-to-b from-slate-950/80 to-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image src="/images/logo.png" height={46} width={46} alt={companyData.name} />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-sm font-bold uppercase tracking-wider text-slate-200 hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                "Halo Sido Muljo Karosen, saya ingin bertanya mengenai perbaikan armada."
              )}`}
              external
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-emerald-500/60 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.553 4.197 1.603 6.014L.065 24l6.101-1.6c1.76.96 3.753 1.464 5.865 1.464 6.645 0 12.03-5.385 12.03-12.031C24.061 5.385 18.676 0 12.031 0zm0 22.032c-1.802 0-3.568-.484-5.112-1.401l-.367-.218-3.794.995 1.012-3.698-.24-.38A9.972 9.972 0 0 1 2.032 12.03c0-5.513 4.486-9.999 10-9.999 5.514 0 10 4.486 10 9.999 0 5.514-4.486 10-10 10zm5.485-7.498c-.3-.15-1.776-.877-2.052-.977-.276-.1-.476-.15-.676.15-.2.3-.776.977-.951 1.176-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.411-1.488-.892-.795-1.493-1.777-1.668-2.077-.175-.3-.019-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.243-.585-.49-.505-.676-.515-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375s-1.05 1.027-1.05 2.503c0 1.476 1.075 2.899 1.225 3.099.15.2 2.114 3.228 5.122 4.529.715.31 1.273.495 1.708.633.718.228 1.372.196 1.888.119.576-.086 1.776-.726 2.026-1.427.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z" />
              </svg>
              <span>CHAT WHATSAPP</span>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-200 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-base font-bold uppercase tracking-wider text-slate-200 hover:text-amber-400 py-2 border-b border-slate-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Button
                href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                  "Halo Sido Muljo Karosen, saya ingin berkonsultasi."
                )}`}
                external
                variant="whatsapp"
                size="md"
                className="w-full flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.124.553 4.197 1.603 6.014L.065 24l6.101-1.6c1.76.96 3.753 1.464 5.865 1.464 6.645 0 12.03-5.385 12.03-12.031C24.061 5.385 18.676 0 12.031 0zm0 22.032c-1.802 0-3.568-.484-5.112-1.401l-.367-.218-3.794.995 1.012-3.698-.24-.38A9.972 9.972 0 0 1 2.032 12.03c0-5.513 4.486-9.999 10-9.999 5.514 0 10 4.486 10 9.999 0 5.514-4.486 10-10 10zm5.485-7.498c-.3-.15-1.776-.877-2.052-.977-.276-.1-.476-.15-.676.15-.2.3-.776.977-.951 1.176-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.411-1.488-.892-.795-1.493-1.777-1.668-2.077-.175-.3-.019-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.628-.926-2.228-.243-.585-.49-.505-.676-.515-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.375s-1.05 1.027-1.05 2.503c0 1.476 1.075 2.899 1.225 3.099.15.2 2.114 3.228 5.122 4.529.715.31 1.273.495 1.708.633.718.228 1.372.196 1.888.119.576-.086 1.776-.726 2.026-1.427.25-.7.25-1.3.175-1.427-.075-.125-.275-.2-.575-.35z" />
                </svg>
                <span>CHAT VIA WHATSAPP</span>
              </Button>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
