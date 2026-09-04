export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "BERANDA", href: "/" },
  { label: "TENTANG KAMI", href: "/tentang" },
  { label: "LAYANAN", href: "/layanan" },
  { label: "PORTOFOLIO", href: "/portfolio" },
  { label: "TESTIMONI", href: "/testimoni" },
  { label: "PARTNER", href: "/partner" },
  { label: "KONTAK", href: "/kontak" }
];

