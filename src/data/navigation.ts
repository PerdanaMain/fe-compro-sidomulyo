export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "BERANDA", href: "/" },
  { label: "PORTOFOLIO", href: "/portfolio" },
  { label: "LAYANAN", href: "/layanan" },
  { label: "TESTIMONI", href: "/testimoni" },
  { label: "PARTNER", href: "/partner" },
  { label: "KONTAK", href: "/kontak" }
];
