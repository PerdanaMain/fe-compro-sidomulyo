export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlightText: string;
  image: string;
  features: string[];
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "body-repair",
    slug: "commercial-car-body-repair",
    number: "01",
    title: "Commercial Car Body Repair",
    shortDescription: "Perbaikan bodi truk, bus, dan kendaraan komersial akibat korosi, benturan, atau kecelakaan — termasuk penggantian panel yang rusak total.",
    fullDescription: "Kami melayani perbaikan bodi kendaraan komersial (truk sedang, truk berat, bus, hingga kendaraan operasional industri). Tim ahli kami menggunakan perlengkapan hidrolik presisi dan pengelasan standar pabrik untuk mengembalikan geometri bodi serta sasis kendaraan Anda ke kondisi semula.",
    highlightText: "Spesialis perbaikan bodi benturan, korosi, dan perbaikan struktur sasis kendaraan komersial dengan standar hasil presisi dan kuat.",
    image: "/images/service-body-repair.png",
    features: [
      "Pemulihan struktur lantai & dinding bodi kendaraan",
      "Pelurusan sasis & rangka utama dengan hydro-press",
      "Pengelasan mig & mag standar industri karoseri",
      "Penggantian panel bodi & penanganan korosi karat",
      "Pemasangan & pemulihan engsel, kunci & peredam getar",
      "Finishing dempul halus & proteksi anti-korosi dasar"
    ],
    iconName: "Wrench"
  },
  {
    id: "karoseri-custom",
    slug: "karoseri-custom-body",
    number: "02",
    title: "Karoseri Custom Body",
    shortDescription: "Pembuatan bodi custom sesuai kebutuhan operasional: bak engkel, wingbox, box alumunium, hingga modifikasi armada khusus.",
    fullDescription: "Kami merancang dan memproduksi berbagai tipe bodi karoseri custom dengan perhitungan distribusi beban yang tepat serta material plat bermutu tinggi. Proses fabrikasi mengutamakan presisi sambungan dan durabilitas jangka panjang.",
    highlightText: "Rancangan dan produksi bodi karoseri custom sesuai spesifikasi armada operasional bisnis Anda dengan sertifikasi resmi.",
    image: "/images/service-karoseri-custom.png",
    features: [
      "Pembuatan Wingbox & Box Alumunium kedap air",
      "Pembuatan bodi Dump Truck heavy duty & medium",
      "Bak Besi Drop Side, Flatbed Trailer & Tangki",
      "Modifikasi bodi kendaraan operasional & panggung",
      "Sertifikasi SRUT & rekomendasi karoseri resmi",
      "Aplikasi material plat tahan benturan & tahan karat"
    ],
    iconName: "Truck"
  },
  {
    id: "reconditioning",
    slug: "rekondisi-reconditioning",
    number: "03",
    title: "Rekaroseri Reconditioning",
    shortDescription: "Rekondisi menyeluruh bodi kendaraan lama — perbaikan struktur, penggantian kaca, dan pembaruan interior kabin.",
    fullDescription: "Program rekondisi total dirancang khusus untuk memperpanjang usia pakai armada operasional Anda. Meliputi pembersihan karat total, penggantian komponen lantai/dinding bodi yang keropos, pembaruan interior kabin, hingga pengecatan ulang.",
    highlightText: "Restorasi dan perbaikan menyeluruh bodi kendaraan komersial lama agar kembali tangguh dan layak operasi secara maksimal.",
    image: "/images/service-reconditioning.png",
    features: [
      "Restorasi kabin tua & keropos total",
      "Penggantian lantai kayu / plat bordes bodi bak",
      "Pembaruan komponen engsel, kunci & seal peredam",
      "Perbaikan & penyetelan ulang konstruksi bodi",
      "Pengecatan ulang & pemulihan fungsi aksesoris",
      "Pemeriksaan keselamatan & kelayakan struktur"
    ],
    iconName: "RotateCcw"
  },
  {
    id: "painting-finishing",
    slug: "painting-finishing",
    number: "04",
    title: "Painting Finishing",
    shortDescription: "Pengecatan ulang, touch-up, grafis livery armada, dengan proses oven untuk hasil akhir presisi dan tahan lama.",
    fullDescription: "Menggunakan fasilitas spray booth berpendingin dan pengering oven modern, kami menjamin hasil pengecatan bodi kendaraan komersial yang mulus, mengkilap, dan tahan terhadap cuaca ekstrem serta benturan material jalanan.",
    highlightText: "Pengecatan kelas oven industri dengan perlindungan anti-karat & lapisan clear coat tahan gores untuk armada Anda.",
    image: "/images/service-painting.png",
    features: [
      "Cat polyurethane (PU) oven berkilau tinggi",
      "Pelapisan epoxy primer anti-karat korosi",
      "Pembersihan karat & pendempulan presisi",
      "Branding logo & livery identitas korporat",
      "Pengecatan ulang warna sesuai standar pabrik",
      "Finishing clear coat anti-gores & UV protection"
    ],
    iconName: "Paintbrush"
  }
];
