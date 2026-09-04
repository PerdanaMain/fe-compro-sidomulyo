export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "body-repair",
    slug: "commercial-car-body-repair",
    title: "Commercial Car Body Repair",
    shortDescription: "Perbaikan bodi truk, bus, dan kendaraan komersial akibat korosi, benturan, atau kecelakaan — termasuk penggantian panel yang rusak total.",
    fullDescription: "Kami melayani perbaikan bodi kendaraan komersial (truk sedang, truk berat, bus, hingga kendaraan operasional industri). Tim ahli kami menggunakan perlengkapan hidrolik presisi dan pengelasan standar pabrik untuk mengembalikan geometri bodi serta sasis kendaraan Anda ke kondisi semula.",
    image: "/images/service-body-repair.png",
    features: [
      "Pelurusan sasis & rangka utama dengan hydro-press",
      "Perbaikan bodi kabin tabrakan / penyok berat",
      "Pengelasan mig & mag standar industri karoseri",
      "Penggantian panel plat bodi anti-karat"
    ],
    iconName: "Wrench"
  },
  {
    id: "karoseri-custom",
    slug: "karoseri-custom-body",
    title: "Karoseri Custom Body",
    shortDescription: "Pembuatan bodi custom sesuai kebutuhan operasional: bak engkel, wingbox, box alumunium, hingga modifikasi armada khusus.",
    fullDescription: "Kami merancang dan memproduksi berbagai tipe bodi karoseri custom dengan perhitungan distribusi beban yang tepat serta material plat bermutu tinggi. Proses fabrikasi mengutamakan presisi sambungan dan durabilitas jangka panjang.",
    image: "/images/service-karoseri-custom.png",
    features: [
      "Pembuatan Wingbox & Box Alumunium kedap air",
      "Dump Truck heavy duty & medium duty",
      "Bak Besi Drop Side & Flatbed Trailer",
      "Sertifikasi SRUT & rekomendasi karoseri resmi"
    ],
    iconName: "Truck"
  },
  {
    id: "reconditioning",
    slug: "rekondisi-reconditioning",
    title: "Rekaroseri Reconditioning",
    shortDescription: "Rekondisi menyeluruh bodi kendaraan lama — perbaikan struktur, penggantian kaca, dan pembaruan interior kabin.",
    fullDescription: "Program rekondisi total dirancang khusus untuk memperpanjang usia pakai armada operasional Anda. Meliputi pembersihan karat total, penggantian komponen lantai/dinding bodi yang keropos, pembaruan interior kabin, hingga pengecatan ulang.",
    image: "/images/service-reconditioning.png",
    features: [
      "Restorasi kabin tua & keropos total",
      "Penggantian lantai kayu/plat bordes bodi bak",
      "Pembaruan engsel, kunci pintu & peredam getar",
      "Pemeriksaan keselamatan struktur karoseri"
    ],
    iconName: "RotateCcw"
  },
  {
    id: "painting-finishing",
    slug: "painting-finishing",
    title: "Painting & Finishing",
    shortDescription: "Pengecatan ulang, touch-up, grafis livery armada, dengan proses oven untuk hasil akhir presisi dan tahan lama.",
    fullDescription: "Menggunakan fasilitas spray booth berpendingin dan pengering oven modern, kami menjamin hasil pengecatan bodi kendaraan komersial yang mulus, mengkilap, dan tahan terhadap cuaca ekstrem serta benturan material jalanan.",
    image: "/images/service-painting.png",
    features: [
      "Cat polyurethane (PU) oven berkilau tinggi",
      "Pelapisan epoxy primer anti-karat korosi",
      "Branding logo & livery identitas korporat",
      "Finishing clear coat anti-gores & UV protection"
    ],
    iconName: "Paintbrush"
  }
];
