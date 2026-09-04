export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "BERANDA", href: "/" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "TENTANG", href: "/tentang" },
  { label: "KLIEN", href: "/klien" },
  { label: "KONTAK", href: "/kontak" }
];

