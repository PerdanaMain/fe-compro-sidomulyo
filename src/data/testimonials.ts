export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    name: "Bapak H. Hendra Wijaya",
    role: "Fleet Manager",
    company: "PT Logistik Trans Jawa",
    content: "Pengerjaan bodi truk Wingbox kami sangat rapi dan presisi. Estimasi waktu selesai tepat sesuai janji sehingga armada bisa langsung kembali beroperasi mencari muatan.",
    rating: 5
  },
  {
    id: "t2",
    name: "Bambang Sugiono",
    role: "Pemilik Armada Truk",
    company: "CV Sidoarjo Angkutan",
    content: "Biaya perbaikan transparan dari awal tanpa ada pembengkakan biaya tersembunyi. Hasil pengelasan sasis kokoh dan garansinya terbukti.",
    rating: 5
  },
  {
    id: "t3",
    name: "Rian Prasetyo",
    role: "Operational Supervisor",
    company: "PT Cargo Nusantara Express",
    content: "Sudah berlangganan rekondisi bodi truk di Sido Muljo Karoseri selama 5 tahun. Kualitas cat oven tahan lama dan tidak gampang memudar.",
    rating: 5
  }
];
