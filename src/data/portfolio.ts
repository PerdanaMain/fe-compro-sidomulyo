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
    slug: "perbaikan-bak-cargo-long",
    title: "Pemulihan Bak Cargo Long",
    category: "Mechanical Repair",
    categorySlug: "mechanical-repair",
    image: "/images/after-bak-cargo-long.jpg",
    beforeImage: "/images/before-bak-cargo-long.jpg",
    afterImage: "/images/after-bak-cargo-long.jpg",
    client: "PT Transportindo Jaya",
    year: "2026",
    duration: "7 Hari Kerja",
    description: "Pemulihan bak cargo long melalui penggantian plat yang mengalami korosi dengan plat baru untuk mengembalikan kondisi dan fungsi bak kendaraan.",
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
    id: "port-iso-tank",
    slug: "perbaikan-iso-tank-container",
    title: "Perbaikan ISO Tank Container",
    category: "Mechanical Repair",
    categorySlug: "mechanical-repair",
    image: "/images/after-iso-tank-container.jpg",
    beforeImage: "/images/before-iso-tank-container.jpg",
    afterImage: "/images/after-iso-tank-container.jpg",
    client: "CV Energi Nusantara",
    year: "2026",
    duration: "10 Hari Kerja",
    description: "Perbaikan dan pemulihan kondisi ISO Tank Container meliputi pemulihan body, frame dan ram atas serta menyempurnakan tampilan eksterior unit.",
    challenge: "Terdapat paparan karat dan permukaan tangki yang perlu perbaikan struktur las dan proteksi pelapisan.",
    solution: "Pembersihan karat, pengelasan ulang bagian struktur, dan pelapisan epoxy primer anti-korosi.",
    workScope: [
      "Pemeriksaan struktur & uji tekan tangki",
      "Pengelasan ulang sambungan rangka & kompartemen",
      "Pembersihan korosi & pelapisan anti-karat",
      "Finishing & pemeriksaan akhir kelayakan"
    ]
  },
  {
    id: "port-repainting-fuso",
    slug: "repainting-fuso-fe74hd",
    title: "Repainting & Finishing - Fuso FE74HD",
    category: "Mechanical Repair",
    categorySlug: "mechanical-repair",
    image: "/images/after-repainting-fuso-FE74HD.jpg",
    beforeImage: "/images/before-repainting-fuso-FE74HD.jpg",
    afterImage: "/images/after-repainting-fuso-FE74HD.jpg",
    client: "PT Fleet Transport",
    year: "2026",
    duration: "5 Hari Kerja",
    description: "Perubahan warna body kendaraan dari kuning menjadi merah dengan hasil akhir yang rapi dan merata.",
    challenge: "Cat bodi lama pudar dan terkelupas akibat pemakaian berat operasional harian.",
    solution: "Pengamplasan total, pelapisan epoxy anti-karat, dan pengecatan ulang oven Polyurethane berkilau.",
    workScope: [
      "Pengamplasan & pembersihan permukaan bodi",
      "Pelapisan dasar epoxy primer anti-karat",
      "Pengecatan ulang Polyurethane sistem oven",
      "Finishing clear coat & detailing"
    ]
  },
  {
    id: "port-2",
    slug: "rekaroseri-pintu-samping-box-cargo-isuzu-traga",
    title: "Rekaroseri Pintu Samping Box Cargo - Isuzu Traga",
    category: "Rekaroseri",
    categorySlug: "rekondisi",
    image: "/images/After Pintu Samping Box Cargo Isuzu Traga.jpg",
    beforeImage: "/images/Before Pintu Samping Box Cargo Isuzu Traga.jpg",
    afterImage: "/images/After Pintu Samping Box Cargo Isuzu Traga.jpg",
    client: "PT Logistics Express",
    year: "2026",
    duration: "7 Hari Kerja",
    description: "Modifikasi box cargo dengan penambahan pintu samping untuk memberikan akses yang lebih praktis sesuai kebutuhan operasional.",
    challenge: "Akses bongkar muat barang hanya dari pintu belakang sehingga membutuhkan waktu ekstra pada saat distribusi.",
    solution: "Modifikasi konstruksi dinding box dan pembuatan pintu samping presisi dengan pengunci stainless heavy-duty.",
    workScope: [
      "Pemotongan & pemuatan rangka pintu samping",
      "Pemasangan engsel & pengunci stainless steel",
      "Pemasangan seal karet pintu kedap air",
      "Pengecatan ulang & finishing bodi samping"
    ]
  },
  {
    id: "port-3",
    slug: "rekaroseri-tangki-24000l-fuso-fighter",
    title: "Rekaroseri Tangki 24.000L - Fuso Fighter",
    category: "Rekaroseri",
    categorySlug: "rekondisi",
    image: "/images/After Tangki 24.000L.jpg",
    beforeImage: "/images/Before Tangki 24.000L.jpg",
    afterImage: "/images/After Tangki 24.000L.jpg",
    client: "CV Energi Nusantara",
    year: "2026",
    duration: "14 Hari Kerja",
    description: "Pemulihan tangki 24.000 L melalui perbaikan dan penyempurnaan konstruksi untuk mengembalikan kondisi unit agar siap kembali beroperasi.",
    challenge: "Kerusakan struktur pada dinding tangki dan kompartemen akibat korosi beban cairan.",
    solution: "Pengelasan ulang struktur las tangki, perbaikan dudukan kompartemen, dan pelapisan epoxy primer anti-karat.",
    workScope: [
      "Uji kebocoran tangki hidrostatik",
      "Pengelasan ulang sambungan struktur kompartemen",
      "Pembersihan karat & pelapisan epoxy tahan cairan kimia",
      "Pemasangan manhole & valve keamanan baru",
      "Branding livery perusahaan & striping keselamatan"
    ]
  },
  {
    id: "port-box-cargo-hino",
    slug: "karoseri-box-cargo-hino-300",
    title: "Box Cargo Medium - Hino 300",
    category: "Karoseri Custom Body",
    categorySlug: "karoseri-custom-body",
    image: "/images/After Box Cargo Hino 300.jpg",
    beforeImage: "/images/Before Box Cargo Hino 300.jpg",
    afterImage: "/images/After Box Cargo Hino 300.jpg",
    client: "PT Transportindo Jaya",
    year: "2026",
    duration: "10 Hari Kerja",
    description: "Pembuatan box cargo dengan konstruksi yang fungsional dan disesuaikan dengan kebutuhan operasional kendaraan.",
    challenge: "Membutuhkan konstruksi bodi box yang kuat menahan beban muatan kargo tanpa mengurangi stabilitas kendaraan.",
    solution: "Fabrikasi rangka baja presisi, pelapisan panel bodi anti-karat, dan finishing cat oven berdurabilitas tinggi.",
    workScope: [
      "Fabrikasi subframe & rangka bodi box",
      "Pemasangan lantai & panel dinding box",
      "Instalasi engsel & mekanisme pengunci pintu",
      "Pengecatan dasar & finishing oven Polyurethane"
    ]
  },
  {
    id: "port-box-pendingin-fuso",
    slug: "karoseri-box-pendingin-fuso-fe74l",
    title: "Box Pendingin Medium - Fuso FE74L",
    category: "Karoseri Custom Body",
    categorySlug: "karoseri-custom-body",
    image: "/images/After Box Pendingin Fuso FE74L.jpg",
    beforeImage: "/images/Before Box Pendingin Fuso FE74L.jpg",
    afterImage: "/images/After Box Pendingin Fuso FE74L.jpg",
    client: "PT Cold Chain Indonesia",
    year: "2026",
    duration: "12 Hari Kerja",
    description: "Pembuatan box pendingin untuk menunjang kebutuhan distribusi  dengan konstruksi yang disesuaikan kebutuhan operasional dan spesifikasi unit.",
    challenge: "Menjaga kestabilan suhu dingin internal secara konsisten selama pengiriman jarak jauh.",
    solution: "Aplikasi Sandwich Panel berinsulasi padat tebal 100mm dan lantai aluminium bordes anti-slip.",
    workScope: [
      "Perakitan Sandwich Panel insulasi dingin",
      "Pemasangan subframe aluminium & lantai bordes",
      "Instalasi kedudukan mesin pendingin refrigrasi",
      "Pengujian kedap suhu & finishing bodi"
    ]
  },
  {
    id: "port-box-pendingin-traga",
    slug: "karoseri-box-pendingin-isuzu-traga",
    title: "Box Pendingin Medium - Isuzu Traga",
    category: "Karoseri Custom Body",
    categorySlug: "karoseri-custom-body",
    image: "/images/After Box Pendingin Isuzu Traga.jpeg",
    beforeImage: "/images/Before Box Pendingin Isuzu Traga.jpg",
    afterImage: "/images/After Box Pendingin Isuzu Traga.jpeg",
    client: "PT Logistics Express",
    year: "2026",
    duration: "8 Hari Kerja",
    description: "Pembuatan box pendingin untuk menunjang kebutuhan distribusi dengan konstruksi yang disesuaikan kebutuhan operasional dan spesifikasi unit.",
    challenge: "Kebutuhan dimensi box yang pas dengan sasis kendaraan ringan namun berkapasitas insulasi optimal.",
    solution: "Konstruksi box pendingin kompak berbobot efisien dengan kerapatan pintu berseal karet ganda.",
    workScope: [
      "Fabrikasi konstruksi rangka box kompak",
      "Pemasangan lapisan peredam suhu polyurethane",
      "Pemasangan pintu & seal karet kedap udara",
      "Pengecatan & pengujian kelayakan"
    ]
  },
  {
    id: "port-tangki-kuzer",
    slug: "karoseri-tangki-stainless-steel-kuzer-150",
    title: "Tangki Stainless Steel - Kuzer RKE 150",
    category: "Karoseri Custom Body",
    categorySlug: "karoseri-custom-body",
    image: "/images/After Tangki Stainless Steel Kuzer 150.jpg",
    beforeImage: "/images/Before Tangki Stainless Steel Kuzer 150.jpg",
    afterImage: "/images/After Tangki Stainless Steel Kuzer 150.jpg",
    client: "CV Tirta Mandiri",
    year: "2026",
    duration: "14 Hari Kerja",
    description: "Pembuatan tangki stainless steel dengan konstruksi yang disesuaikan dengan kebutuhan dan penggunaan operasional.",
    challenge: "Kebutuhan material food-grade tahan karat dengan tingkat kerapatan las sempurna tanpa potensi kebocoran.",
    solution: "Fabrikasi plat stainless steel high-grade dengan teknik pengelasan TIG continuous seam dan polished finishing.",
    workScope: [
      "Fabrikasi bodi tangki stainless steel food-grade",
      "Pengelasan TIG continuous seam & uji hidrostatik",
      "Pemasangan dudukan sasis & katup muat cair",
      "Polishing & finishing permukaan tangki"
    ]
  },
  {
    id: "port-5",
    slug: "cat-oven-branding-fleet-bus-pariwisata",
    title: "Cat Oven & Branding Fleet - Bus Pariwisata",
    category: "Other Services",
    categorySlug: "other-services",
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
  }
];

