export interface ClientItem {
  id: string;
  name: string;
  category: string;
}

export const clientsData: ClientItem[] = [
  { id: "c1", name: "PT Transportindo Jaya", category: "Perusahaan Logistik Intercity" },
  { id: "c2", name: "PT Logistics Express", category: "Distributor Material Bangunan" },
  { id: "c3", name: "CV Energi Nusantara", category: "Penyedia Jasa Ekspedisi Cargo" },
  { id: "c4", name: "PT Trans Haulage", category: "Perusahaan Transportasi Niaga" }
];
