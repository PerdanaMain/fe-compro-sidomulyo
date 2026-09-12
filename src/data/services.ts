export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "body-repair",
    slug: "body-repair",
    number: "01",
    title: "Body Repair",
    description: "Kami melayani perbaikan bodi kendaraan dengan pengerjaan yang presisi dan terukur. Setiap pekerjaan berfokus pada pemulihan struktur, bentuk, dan tampilan kendaraan agar kembali optimal dan siap beroperasi.",
    image: "/images/service-body-repair.png",
    features: [
      "Pembongkaran & pemeriksaan komponen",
      "Pengetokan & perbaikan panel bodi",
      "Pendempulan & pengamplasan permukaan",
      "Pengecatan & refinishing",
      "Perakitan & penyetelan komponen",
      "Finishing & detailing"
    ],
    iconName: "Wrench"
  },
  {
    id: "rekondisi",
    slug: "rekondisi",
    number: "02",
    title: "Rekaroseri",
    description: "Kami melayani rekaroseri kendaraan melalui proses pembongkaran, perubahan, dan pembangunan kembali konstruksi sesuai kebutuhan. Setiap pengerjaan dilakukan dengan memperhatikan kekuatan struktur, fungsi kendaraan, dan ketepatan konstruksi.",
    image: "/images/service-reconditioning.png",
    features: [
      "Pembongkaran dan pemeriksaan konstruksi karoseri",
      "Perbaikan dan penggantian bagian struktur yang rusak",
      "Pembuatan dan pemasangan kembali konstruksi bodi",
      "Penyesuaian dimensi dan konstruksi sesuai kebutuhan",
      "Perbaikan lantai, dinding, rangka, pintu, dan komponen pendukung",
      "Penyelesaian akhir dan pemeriksaan hasil pengerjaan"
    ],
    iconName: "RotateCcw"
  },
  {
    id: "other-services",
    slug: "other-services",
    number: "03",
    title: "Other Services",
    description: "Kami menangani berbagai kebutuhan pengerjaan kendaraan komersial di luar layanan utama, dengan solusi yang disesuaikan berdasarkan kondisi dan kebutuhan setiap kendaraan.",
    image: "/images/service-painting.png",
    features: [
      "Pemeriksaan kondisi kendaraan secara menyeluruh",
      "Perbaikan bagian bodi dan struktur yang mengalami kerusakan",
      "Penanganan korosi dan penggantian bagian yang keropos",
      "Perbaikan atau pembaruan komponen pendukung",
      "Perbaikan interior dan eksterior kendaraan",
      "Pengecatan ulang dan penyegaran tampilan",
      "Finishing, detailing, dan pemeriksaan akhir"
    ],
    iconName: "Paintbrush"
  },
  {
    id: "karoseri-custom",
    slug: "karoseri-custom-body",
    number: "04",
    title: "Karoseri Custom Body",
    description: "Kami melayani pembuatan dan pengembangan karoseri custom body untuk memenuhi kebutuhan operasional kendaraan Anda. Setiap konstruksi dirancang dan dikerjakan sesuai fungsi, kebutuhan muatan, serta spesifikasi kendaraan dengan mengutamakan kekuatan dan ketepatan pengerjaan.",
    image: "/images/service-karoseri-custom.png",
    features: [
      "Konsultasi kebutuhan dan konsep desain",
      "Pembuatan rangka dan konstruksi bodi",
      "Pembuatan lantai, dinding, atap, dan panel bodi",
      "Pembuatan dan pemasangan pintu serta komponen pendukung",
      "Penyesuaian dimensi dan konfigurasi bodi",
      "Pengecatan dan penyelesaian akhir",
      "Pemeriksaan dan penyetelan hasil pengerjaan"
    ],
    iconName: "Truck"
  }
];
