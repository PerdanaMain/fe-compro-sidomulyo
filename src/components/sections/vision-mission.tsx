import React from "react";
import { Target, Compass } from "lucide-react";

export interface VisionProps {
  title?: string;
  description?: string;
  className?: string;
}

export interface MissionProps {
  title?: string;
  description?: string;
  className?: string;
}

export function Vision({
  title = "Visi",
  description = "Menjadi mitra terpercaya dalam perawatan, perbaikan kendaraan komersial dengan mengutamakan kualitas, ketepatan waktu, dan kepuasan pelanggan.",
  className = "",
}: VisionProps) {
  return (
    <div
      className={`bg-slate-50/80 p-7 sm:p-8 rounded-2xl border border-slate-200/70 shadow-2xs hover:shadow-md transition-all flex flex-col justify-start ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-[#1e3a8a]/10 text-[#1e3a8a] flex items-center justify-center mb-6 shrink-0">
        <Target className="w-6 h-6 stroke-[2.2]" />
      </div>
      <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-3 uppercase">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
}

export function Mission({
  title = "Misi",
  description = "Memberikan solusi kebutuhan dan perawatan atau perbaikan kendaraan komersial yang sesuai kebutuhan pelanggan dengan mengutamakan kualitas, keandalan, dan pelayanan profesional. Kami terus meningkatkan kompetensi, teknologi dan proses kerja yang terukur, aman, dan bertanggung jawab untuk menghadirkan layanan yang transparan dan terpercaya.",
  className = "",
}: MissionProps) {
  return (
    <div
      className={`bg-slate-50/80 p-7 sm:p-8 rounded-2xl border border-slate-200/70 shadow-2xs hover:shadow-md transition-all flex flex-col justify-start ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 shrink-0">
        <Compass className="w-6 h-6 stroke-[2.2]" />
      </div>
      <h3 className="font-heading text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-3 uppercase">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
}

export interface VisionMissionProps {
  className?: string;
  gridClassName?: string;
}

export function VisionMission({
  className = "",
  gridClassName = "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
}: VisionMissionProps) {
  return (
    <div className={`${gridClassName} ${className}`}>
      <Vision />
      <Mission />
    </div>
  );
}
