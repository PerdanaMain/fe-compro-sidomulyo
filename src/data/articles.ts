export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  pillar: "komersial" | "edukatif" | "studi-kasus";
  date: string;
  readTime: string;
  author: string;
  image: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  faqs?: ArticleFaq[];
  relatedServiceSlug?: string;
}

export const articlesData: ArticleItem[] = [
  {
    id: "1",
    slug: "biaya-buat-wingbox-truk",
    title: "Berapa Biaya Buat Wingbox Truk 2026? (Rincian & Faktor Penentu)",
    metaDescription: "Panduan estimasi biaya pembuatan karoseri wingbox truk 2026 di Sidoarjo & Surabaya. Pelajari faktor bahan hidrolik, spesifikasi plat, dan lama pengerjaan.",
    category: "Estimasi Biaya",
    pillar: "komersial",
    date: "15 Agustus 2026",
    readTime: "6 min baca",
    author: "Tim Teknis Sido Mulyo Abadhi",
    image: "/images/service-karoseri-custom.png",
    summary: "Biaya pembuatan karoseri wingbox bervariasi tergantung pada ukuran sasis (engkel vs tronton), material pembungkus (plat aluminium vs besi Galvanil), serta mekanisme hidrolik samping. Simak rincian komponen penentu harganya di sini.",
    sections: [
      {
        heading: "1. Mengapa Wingbox Menjadi Pilihan Utama Logistik Modern?",
        content: [
          "Karoseri jenis wingbox atau pintu samping hidrolik merupakan standar emas bagi perusahaan ekspedisi dan manufaktur. Dengan sistem flap samping yang dapat dibuka 90 derajat secara otomatis menggunakan hidrolik, proses bongkar muat barang palletized dapat selesai 3-5 kali lebih cepat dibanding truk box konvensional.",
          "Kecepatan bongkar muat ini berdampak langsung pada pemanfaatan jam kerja pengemudi dan efisiensi rotasi truk per hari."
        ]
      },
      {
        heading: "2. Faktor Utama yang Mempengaruhi Biaya Pembuatan Wingbox",
        content: [
          "Beberapa komponen utama yang menentukan besaran anggaran karoseri wingbox meliputi:",
          "• Spesifikasi Sasis Truk: Pembuatan wingbox untuk truk Colt Diesel (CDD) berbeda harganya dengan armada Fuso Tronton 10 roda karena perbedaan panjang karoseri (6 meter vs 9.5 meter).",
          "• Sistem Hidrolik & Pompa (Power Pack): Pemilihan silinder hidrolik pabrikan Jepang/Eropa mempengaruhi keandalan dan daya tahan tekanan pintu.",
          "• Ketebalan Plat & Rangka Utama: Penggunaan rangka besi UNP/WF berkekuatan tinggi menjamin wingbox tidak melengkung saat dimuati beban maksimal.",
          "• Bahan Dinding & Atap: Pilihan antara plat Aluminium corrugated (ringan dan tahan karat) atau Plat Galvanil/Plat Besi (kokoh dan ekonomis)."
        ]
      },
      {
        heading: "3. Estimasi Rentang Biaya Karoseri Wingbox (Gambaran Umum)",
        content: [
          "Sebagai panduan awal bagi fleet owner di wilayah Sidoarjo, Surabaya, dan Jawa Timur, pembuatan wingbox berkualitas standar industri berkisar antara Rp 85 juta hingga Rp 190+ juta tergantung pada dimensi dan sistem hidrolik yang dipakai.",
          "Untuk mendapatkan penawaran harga presisi beserta garansi kebocoran 1 tahun, disarankan melakukan inspeksi sasis langsung ke workshop karoseri kami di Krian."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa lama proses pengerjaan 1 unit karoseri wingbox?",
        answer: "Rata-rata pengerjaan fabrikasi wingbox dari nol memakan waktu 25 hingga 35 hari kerja tergantung ketersediaan sasis dan kustomisasi."
      },
      {
        question: "Apakah karoseri wingbox dari Sido Mulyo Abadhi dilengkapi SRUT?",
        answer: "Ya, seluruh karoseri yang kami fabrikasi telah sesuai standar Kemenhub untuk kemudahan penerbitan SRUT (Sertifikat Registrasi Uji Tipe)."
      }
    ],
    relatedServiceSlug: "karoseri-custom-body"
  },
  {
    id: "2",
    slug: "body-repair-truk-rusak-berat",
    title: "Body Repair Truk Rusak Berat: Proses, Durasi, dan Estimasi Biaya",
    metaDescription: "Panduan pemulihan & body repair truk bekas kecelakaan di Sidoarjo. Pelajari proses penataan sasis, press body hidrolik, dan perbaikan kabin rusak berat.",
    category: "Body Repair",
    pillar: "komersial",
    date: "20 Agustus 2026",
    readTime: "8 min baca",
    author: "Tim Teknis Sido Mulyo Abadhi",
    image: "/images/service-body-repair.png",
    summary: "Truk yang mengalami kecelakaan guling atau tabrakan hebat memerlukan perbaikan struktur khusus agar center sasis dan kekokohan kabin kembali sempurna sesuai toleransi pabrikan.",
    sections: [
      {
        heading: "1. Diagnosis Kerusakan Struktur Sasis dan Kabin",
        content: [
          "Langkah awal pada kendaraan niaga damaged-heavy adalah pemetaan titik simpang sasis (chassis misalignment). Pengukuran memakai metode laser dan penandaan center-line memastikan apakah sasis tertekuk (bent), melintir (twisted), atau bergeser.",
          "Tanpa perataan sasis yang benar, truk akan 'makan ban' sebelah dan berbahaya saat dipacu di jalan tol."
        ]
      },
      {
        heading: "2. Tahapan Rekondisi & Press Body Hidrolik",
        content: [
          "• Penarikan & Pressing Sasis: Menggunakan jangkung hidrolik tonase tinggi untuk mengembalikan kelurusan besi balok utama tanpa merusak struktur molekul baja.",
          "• Ketok & Rekonstruksi Kabin: Memotong bagian plat yang penyok parah, mengganti tulang pintu/lantai kabin yang tertekuk, dan melakukan las CO2 anti-retak.",
          "• Replacement Komponen Rusak: Penggantian engsel, kancing pintu, radiator bracket, dan aksesoris luar dengan suku cadang presisi."
        ]
      },
      {
        heading: "3. Finishing Spray Booth Oven Anti-Karat",
        content: [
          "Setelah plat dan sasis selesai diperbaiki, seluruh permukaan mengalami amplas total, pengerjaan epoxy primer anti-karat, dan pelapisan cat polyurethane (PU) di dalam fasilitas oven bertemperatur tinggi agar kilau dan durabilitas warna tahan lama."
        ]
      }
    ],
    faqs: [
      {
        question: "Apakah sasis truk yang bengkok parah masih bisa diluruskan?",
        answer: "Bisa. Dengan peralatan press hidrolik modern dan tenaga ahli berpengalaman, sasis truk yang melintir atau bengkok dapat diluruskan kembali dengan presisi tinggi."
      },
      {
        question: "Berapa lama perbaikan truk rusak berat pasca kecelakaan?",
        answer: "Durasi pengerjaan berkisar antara 2 hingga 4 minggu tergantung tingkat keparahan kerusakan sasis dan ketersediaan komponen kabin."
      }
    ],
    relatedServiceSlug: "commercial-car-body-repair"
  },
  {
    id: "3",
    slug: "rekondisi-kabin-truk-tua",
    title: "Rekondisi Kabin Truk Tua: Kapan Worth It, Kapan Harus Ganti Unit?",
    metaDescription: "Analisis hemat biaya rekondisi kabin truk tua vs beli kabin copotan / unit baru. Tips perbaikan bodi truk operasional perusahaan logistik.",
    category: "Rekondisi Truk",
    pillar: "komersial",
    date: "28 Agustus 2026",
    readTime: "5 min baca",
    author: "Tim Teknis Sido Mulyo Abadhi",
    image: "/images/service-reconditioning.png",
    summary: "Mempertahankan armada truk tua dengan kabin yang mulai keropos adalah tantangan setiap pengelola fleet. Simak kapan biaya rekondisi kabin jauh lebih efisien daripada membeli armada baru.",
    sections: [
      {
        heading: "1. Masalah Utama Pada Kabin Truk Usia di Atas 7 Tahun",
        content: [
          "Musuh terbesar kabin truk tua adalah korosi pada spakbor bawah, lantai kabin dekat pedal, serta perbatasan karet kaca depan. Keroposan ini jika dibiarkan akan menyebabkan kebocoran air saat hujan dan melemahkan dudukan mounting kabin."
        ]
      },
      {
        heading: "2. Keuntungan Rekondisi Total di Bengkel Karoseri",
        content: [
          "• Hemat Biaya hingga 70%: Dibandingkan membeli unit truk baru, rekondisi bodi total hanya membutuhkan sebagian kecil biaya operasional perusahaan.",
          "• Perkuatan Plat Lantai & Dinding: Penggantian plat tipis dengan plat Galvanil tebal 1.2mm–1.8mm membuat kabin lebih kokoh dibanding kondisi standar lama.",
          "• Tampilan Seperti Unit Baru: Pengecatan ulang total dengan warna identitas perusahaan (livery branding) memberikan citra profesional di mata klien ekspedisi."
        ]
      }
    ],
    faqs: [
      {
        question: "Apakah rekondisi kabin juga mencakup interior dan kelistrikan?",
        answer: "Ya, paket rekondisi total kami dapat disesuaikan mencakup perbaikan plafon, perapihan kabel dasbor, dan perbaikan peredam suara kabin."
      }
    ],
    relatedServiceSlug: "rekondisi-reconditioning"
  },
  {
    id: "4",
    slug: "cat-pu-oven-vs-cat-biasa-truk",
    title: "Cat PU Oven vs Cat Biasa untuk Truk: Perbandingan Hasil & Durabilitas",
    metaDescription: "Perbandingan cat Polyurethane (PU) oven vs cat duco biasa untuk bodi truk komersial. Pelajari ketahanan gesek, anti-karat, dan efisiensi jangka panjang.",
    category: "Pengecatan Oven",
    pillar: "komersial",
    date: "01 September 2026",
    readTime: "5 min baca",
    author: "Tim Teknis Sido Mulyo Abadhi",
    image: "/images/service-painting.png",
    summary: "Kondisi jalanan tropis di Indonesia memapar bodi truk pada panas terik, hujan asam, serta gesekan rantai muatan. Mengapa cat oven PU menjadi investasi wajib bagi armada niaga?",
    sections: [
      {
        heading: "1. Perbedaan Mendasar Jenis Cat dan Metode Pengeringan",
        content: [
          "Cat konvensional (NC/Duco biasa) mengering hanya melalui penguapan thiner di udara terbuka. Hal ini membuat lapisan cat rentan berpori dan pudar dalam hitungan bulan.",
          "Sebaliknya, Cat Polyurethane (PU) yang diproses di dalam ruang Spray Booth Oven mendapatkan pemanasan terukur. Molekul PU mengikat secara kimiawi membentuk lapisan film fleksibel dan keras yang tahan benturan."
        ]
      },
      {
        heading: "2. Keunggulan Cat PU Oven untuk Kendaraan Niaga",
        content: [
          "• Tahan Goresan & Gesekan Rantai: Bodi truk lebih tahan terhadap benturan krikil dan gesekan tali terpal.",
          "• Proteksi Karat Maksimal: Lapisan epoxy primer dan clear coat PU mengunci plat besi agar tidak berhubungan langsung dengan oksigen dan kelembaban.",
          "• Warna Tahan 3-5 Tahun Tanpa Pudar: Efisiensi biaya karena armada tidak perlu di-cat ulang setiap tahun."
        ]
      }
    ],
    faqs: [
      {
        question: "Berapa lama proses pengecatan oven untuk 1 unit truk?",
        answer: "Proses persiapan pengerokkan, amplas, epoxy, cat warna, hingga pengeringan oven memakan waktu 4 sampai 7 hari kerja."
      }
    ],
    relatedServiceSlug: "painting-finishing"
  },
  {
    id: "5",
    slug: "wingbox-vs-box-aluminium-vs-bak-besi",
    title: "Wingbox vs Box Aluminium vs Bak Besi: Panduan Memilih Karoseri Armada",
    metaDescription: "Panduan lengkap memilih jenis karoseri truk: Wingbox, Box Aluminium, atau Bak Besi Terbuka. Sesuaikan jenis muatan ekspedisi & efisiensi biaya.",
    category: "Panduan Karoseri",
    pillar: "edukatif",
    date: "02 September 2026",
    readTime: "7 min baca",
    author: "Tim Teknis Sido Mulyo Abadhi",
    image: "/images/service-karoseri-custom-2.png",
    summary: "Salah memilih jenis karoseri dapat berakibat pada hambatan operasional muatan, masalah uji KIR, atau kerusakan barang kiriman. Pahami kelebihan masing-masing jenis karoseri.",
    sections: [
      {
        heading: "1. Karoseri Wingbox: Pilihan Terbaik Barang Pallet & Manufaktur",
        content: [
          "Cocok untuk: Industri FMCG, karton box, barang elektronik, dan pengiriman antar pabrik yang memiliki fasilitas forklift.",
          "Kelebihan: Akses bongkar samping penuh, efisiensi waktu tenaga kerja, perlindungan total dari cuaca."
        ]
      },
      {
        heading: "2. Box Aluminium Konvensional: Aman & Ekonomis",
        content: [
          "Cocok untuk: Kurir ekspedisi e-commerce, bahan makanan kering, dan pengiriman dalam kota.",
          "Kelebihan: Bobot karoseri lebih ringan (hemat bahan bakar), biaya pembuatan lebih terjangkau dibanding wingbox, bebas bocor."
        ]
      },
      {
        heading: "3. Bak Besi 3-Way / Drop Side: Fleksibel untuk Muatan Berat",
        content: [
          "Cocok untuk: Material bangunan, hasil pertanian, bahan baku industri berat, dan barang curah.",
          "Kelebihan: Pintu samping dan belakang bisa dibuka, mudah dimuati crane/overhead, biaya pembuatan paling ekonomis."
        ]
      }
    ],
    faqs: [
      {
        question: "Manakah yang paling hemat bahan bakar antara Box Aluminium vs Wingbox?",
        answer: "Box Aluminium konvensional lebih ringan bobotnya dibanding Wingbox yang membawa mekanisme hidrolik, sehingga sedikit lebih hemat BBM untuk rute jarak jauh."
      }
    ],
    relatedServiceSlug: "karoseri-custom-body"
  },
  {
    id: "6",
    slug: "panduan-srut-sertifikasi-karoseri",
    title: "Panduan SRUT & Sertifikasi Karoseri Resmi di Indonesia",
    metaDescription: "Penjelasan lengkap syarat SRUT (Sertifikat Registrasi Uji Tipe) karoseri truk Kemenhub. Pastikan armada lulus KIR dan legal beroperasi di jalan raya.",
    category: "Regulasi & Legalitas",
    pillar: "edukatif",
    date: "03 September 2026",
    readTime: "6 min baca",
    author: "Tim Teknis Sido Mulyo Abadhi",
    image: "/images/service-body-repair-2.png",
    summary: "Setiap kendaraan komersial yang melakukan perubahan atau penambahan karoseri wajib memiliki SRUT sebagai bukti laik jalan dan keabsahan rancang bangun dari Direktorat Jenderal Perhubungan Darat.",
    sections: [
      {
        heading: "1. Apa Itu SRUT dan Mengapa Sangat Penting?",
        content: [
          "SRUT adalah dokumen legalitas keselamatan yang menerangkan bahwa fisik karoseri yang terpasang pada sasis telah sesuai dengan Gambar Rancang Bangun yang disetujui Kemenhub.",
          "Tanpa SRUT yang sah, armada truk tidak dapat menerbitkan Buku Uji KIR pertama kali dan berisiko ditilang saat razia penimbangan ODOL (Over Dimension Over Load)."
        ]
      },
      {
        heading: "2. Persyaratan Pembuatan Karoseri Ber-SRUT",
        content: [
          "• Memilih Bengkel Karoseri Resmi: Pastikan bengkel memiliki Surat Keputusan (SK) Rancang Bangun resmi dari Kementerian Perhubungan.",
          "• Kesesuaian Dimensi: Panjang rear-overhang (ROH), tinggi box, dan lebar karoseri tidak boleh melebihi batas jatah sasis pabrikan.",
          "• Komponen Keselamatan: Terpasangnya perisai kolong samping (underrun protection), bumper belakang, dan stiker pemantul cahaya (reflektif) standar."
        ]
      }
    ],
    faqs: [
      {
        question: "Apakah perbaikan bodi bekas tabrakan memerlukan pengurusan SRUT ulang?",
        answer: "Selama perbaikan tidak mengubah dimensi asal karoseri dan tidak memotong sasis utama, pengurusan SRUT ulang tidak diperlukan."
      }
    ],
    relatedServiceSlug: "karoseri-custom-body"
  },
  {
    id: "7",
    slug: "penyebab-bodi-truk-keropos-dan-pencegahan",
    title: "7 Penyebab Bodi Truk Keropos & Cara Efektif Pencegahannya",
    metaDescription: "Tips teknis mencegah bodi truk berkarat dan keropos. Pelajari titik rawan sasis, perawatan pelapis epoxy, dan penanganan karat sejak dini.",
    category: "Perawatan Armada",
    pillar: "edukatif",
    date: "04 September 2026",
    readTime: "5 min baca",
    author: "Tim Teknis Sido Mulyo Abadhi",
    image: "/images/service-reconditioning-2.png",
    summary: "Karat yang dibiarkan pada rangka karoseri truk akan merusak struktur baja dan memicu patah sasis saat membawa beban berat. Kenali titik penyebabnya dan cara pencegahannya.",
    sections: [
      {
        heading: "1. Titik Rawan Karat Pada Kendaraan Niaga",
        content: [
          "• Sambungan Pengelasan Sasis: Bekas las yang tidak dilapisi cat anti-karat dengan sempurna merupakan pintu masuk utama kelembaban.",
          "• Sela-sela Lantai Bak & Kabin: Penumpukan lumpur, tanah basah, atau muatan asam yang jarang dibersihkan.",
          "• Rongga Dalam Pintu Kabin: Saluran pembuangan air pintu yang mampet menyebabkan air mengendap di dalam rangka pintu."
        ]
      },
      {
        heading: "2. Langkah Mencegah Karoseri Keropos",
        content: [
          "1. Cuci Kolong Truk Secara Rutin: Terutama setelah melintasi rute pantai atau jalan berlumpur.",
          "2. Pelapisan Flintkote / Undercoating Anti-Krat: Semprotkan pelapis aspal/epoxy karet pada kolong sasis setiap 1-2 tahun.",
          "3. Segera Cat Ulang Goresan Dalam: Jangan membiarkan plat besi telanjang terpapar udara bebas.",
          "4. Lakukan Touch-up Las di Bengkel Karoseri Terpercaya: Jika ditemukan titik karat awal, segera kerok dan las ulang sebelum merembet."
        ]
      }
    ],
    faqs: [
      {
        question: "Apakah Sido Mulyo Abadhi melayani perbaikan keropos sebagian tanpa cat ulang total?",
        answer: "Ya, kami melayani perbaikan titik keropos lokal (ketok & tambal plat) beserta finishing warna menyatu dengan cat lama."
      }
    ],
    relatedServiceSlug: "rekondisi-reconditioning"
  }
];
