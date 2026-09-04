"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Clock, MapPin, Menu, X, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/company";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";

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
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
            : "bg-gradient-to-b from-slate-950/80 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-blue-800 border border-amber-500/50 flex items-center justify-center text-white font-extrabold font-heading text-xl shadow-md group-hover:bg-blue-700 transition-colors">
              SM
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-extrabold uppercase tracking-tight text-white group-hover:text-amber-400 transition-colors">
                SIDO MULJO
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                KAROSERI & BODY REPAIR
              </span>
            </div>
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
                "Halo Sido Muljo Karoseri, saya ingin bertanya mengenai perbaikan armada."
              )}`}
              external
              variant="primary"
              size="sm"
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{companyData.phone}</span>
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
                href={`https://wa.me/${companyData.whatsapp}`}
                external
                variant="primary"
                size="md"
                className="w-full flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>HUBUNGI KAMI VIA WA</span>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
