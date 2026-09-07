export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  client?: string;
  year?: string;
  duration?: string;
  description?: string;
  challenge?: string;
  solution?: string;
  workScope?: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: "port-1",
    slug: "box-cargo-medium-hino-300",
    title: "Box Cargo Medium - Hino 300",
    category: "Body Repair",
    categorySlug: "body-repair",
    image: "/images/service-body-repair-2.png",
    beforeImage: "/images/service-body-repair.png",
    afterImage: "/images/service-body-repair-2.png",
    client: "PT Transportindo Jaya",
    year: "2026",
    duration: "7 Hari Kerja",
    description: "Perbaikan total bodi truk Hino 300 akibat insiden benturan samping. Meliputi pengetokan panel bodi, pelurusan sasis, pengelasan struktur, hingga finishing cat oven.",
    challenge: "Kerusakan parah pada panel samping bodi kanan serta distorsi sasis utama yang menyebabkan pintu bak tidak dapat dikunci dengan rapat.",
    solution: "Menggunakan hydro-press sasis presisi untuk mengembalikan kelurusan rangka, penggantian plat dinding kanan, serta pengecatan oven polyurethane 3 lapis.",
    workScope: [
      "Pelurusan sasis & rangka utama dengan hydro-press",
      "Penggantian panel bodi samping kanan & pintu bak",
      "Pengelasan MIG/MAG standar industri karoseri",
      "Pengecatan dasar anti-karat epoxy primer",
      "Finishing cat oven Polyurethane (PU)"
    ]
  },
  {
    id: "port-2",
    slug: "box-pendingin-medium-isuzu-traga",
    title: "Box Pendingin Medium - Isuzu Traga",
    category: "Rekaroseri",
    categorySlug: "rekondisi",
    image: "/images/service-karoseri-custom-2.png",
    beforeImage: "/images/service-reconditioning.png",
    afterImage: "/images/service-karoseri-custom-2.png",
    client: "PT Logistics Express",
    year: "2026",
    duration: "10 Hari Kerja",
    description: "Rekondisi total bodi box pendingin Isuzu Traga yang keropos akibat pemakaian jangka panjang dan paparan korosi bahan muatan dingin.",
    challenge: "Lantai bodi keropos parah dan lapisan peredam suhu (insulasi) rusak sehingga pendinginan tidak maksimal.",
    solution: "Restorasi total lantai dengan plat stainless anti-karat, pembaruan lapisan insulasi polyurethane busa tebal, dan perbaikan engsel pintu.",
    workScope: [
      "Pembersihan korosi total & pembongkaran lantai lama",
      "Pemasangan lantai stainless steel bordes anti-slip",
      "Pembaruan insulasi thermal polyurethane",
      "Penyetelan & penggantian seal karet pintu kedap udara",
      "Pengecatan ulang luar & dalam"
    ]
  },
  {
    id: "port-3",
    slug: "rekondisi-tangki-24000l-fuso-fighter",
    title: "Rekondisi Tangki 24.000L - Fuso Fighter",
    category: "Reconditioning",
    categorySlug: "reconditioning",
    image: "/images/service-reconditioning-2.png",
    beforeImage: "/images/service-reconditioning.png",
    afterImage: "/images/service-reconditioning-2.png",
    client: "CV Energi Nusantara",
    year: "2026",
    duration: "14 Hari Kerja",
    description: "Rekondisi struktur dan pengecatan ulang tangki kapasitas 24.000 Liter untuk armada angkutan bahan bakar cair.",
    challenge: "Kebocoran halus pada sambungan las kompartemen tengah serta karat permukaan tangki yang menumpuk.",
    solution: "Uji tekan hidrostatik, pengelasan penetrasi penuh pada bagian bocor, sandblasting permukaan, serta pelapisan epoksi tahan kimia.",
    workScope: [
      "Uji kebocoran tangki hidrostatik",
      "Pengelasan ulang sambungan struktur kompartemen",
      "Pembersihan karat & pelapisan epoxy tahan cairan kimia",
      "Pemasangan manhole & valve keamanan baru",
      "Branding livery perusahaan & striping keselamatan"
    ]
  },
  {
    id: "port-4",
    slug: "karoseri-dump-truck-hino-fm",
    title: "Karoseri Dump Truck - Hino FM 260",
    category: "Karoseri Custom Body",
    categorySlug: "karoseri-custom-body",
    image: "/images/service-karoseri-custom.png",
    beforeImage: "/images/service-body-repair-2.png",
    afterImage: "/images/service-karoseri-custom.png",
    client: "PT Pertambangan Mandiri",
    year: "2026",
    duration: "12 Hari Kerja",
    description: "Pembuatan karoseri dump truck heavy duty kapasitas 24 m³ bermaterial plat high-tensile tahan gesek untuk sektor konstruksi.",
    challenge: "Kebutuhan konstruksi bak yang ekstra kuat menahan benturan batu koral tanpa menambah bobot berlebih pada kendaraan.",
    solution: "Desain bodi lekukan presisi menggunakan plat high-tensile steel, subframe reinforced, dan hidrolik hoist tipe tipper heavy duty.",
    workScope: [
      "Fabrikasi subframe & bodi dump truck heavy duty",
      "Pemasangan sistem hidrolik tipper hoist high-pressure",
      "Pengelasan penuh continuous seam welding",
      "Pengecatan anti-karat & lapisan proteksi gesekan",
      "Pengujian uji angkat beban & fungsi hidrolik"
    ]
  },
  {
    id: "port-5",
    slug: "cat-oven-branding-fleet-bus-pariwisata",
    title: "Cat Oven & Branding Fleet - Bus Pariwisata",
    category: "Reconditioning",
    categorySlug: "reconditioning",
    image: "/images/service-painting.png",
    beforeImage: "/images/service-body-repair.png",
    afterImage: "/images/service-painting.png",
    client: "PO Trans Nusantara",
    year: "2026",
    duration: "5 Hari Kerja",
    description: "Pengecatan ulang standar oven industrial dan penempelan grafis livery perusahaan bus pariwisata.",
    challenge: "Cat lama memudar dan banyak guratan halus yang mengurangi daya tarik estetika armada.",
    solution: "Pengamplasan total hingga dasar, dempul halus, pengecatan 3 lapis di dalam ruang oven berfilter, dan finishing clear coat mengkilap.",
    workScope: [
      "Pengamplasan & perbaikan permukaan bodi halus",
      "Aplikasi epoxy primer & surfacer",
      "Pengecatan warna dasar Polyurethane oven",
      "Pemasangan cutting sticker livery & logo korporat",
      "Pelapisan wet-look clear coat anti-UV"
    ]
  },
  {
    id: "port-6",
    slug: "box-pendingin-medium-fuso-fe74l",
    title: "Box Pendingin Medium - Fuso FE74L",
    category: "Karoseri Custom Body",
    categorySlug: "karoseri-custom-body",
    image: "/images/service-karoseri-custom-2.png",
    beforeImage: "/images/service-reconditioning.png",
    afterImage: "/images/service-karoseri-custom-2.png",
    client: "PT Cold Chain Indonesia",
    year: "2026",
    duration: "8 Hari Kerja",
    description: "Pembuatan bodi box refrigated suhu minus presisi tinggi untuk distribusi makanan beku.",
    challenge: "Menjaga suhu stabil di bawah -18°C secara konsisten di jalur transportasi antar kota.",
    solution: "Aplikasi teknologi Sandwich Panel berisolasi polyurethane tebal 100mm dengan lantai plat aluminium bordes.",
    workScope: [
      "Perakitan Sandwich Panel insulasi dingin",
      "Pemasangan subframe aluminium ringan & kokoh",
      "Instalasi dudukan mesin pendingin refrigrasi",
      "Pemasangan engsel & pengunci stainless heavy-duty",
      "Pengujian kebocoran suhu & sertifikasi bodi"
    ]
  }
];

