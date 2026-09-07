import { companyData } from "@/data/company";
import { Compass, Target } from "lucide-react";

interface VisionMissionProps {
  vision?: string;
  mission?: string;
  className?: string;
  variant?: "white" | "slate";
}

export function VisionMission({
  vision = companyData.vision,
  mission = companyData.mission,
  className = "",
  variant = "white"
}: VisionMissionProps) {
  const cardBgClass = variant === "slate" ? "bg-slate-50" : "bg-white";

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${className}`}>
      {/* Visi */}
      <div className={`${cardBgClass} p-6 sm:p-7 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-start`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-[#1e3a8a]/10 text-[#1e3a8a] flex items-center justify-center shrink-0">
            <Target className="w-5 h-5 stroke-[2.2]" />
          </div>
          <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-slate-900">
            Visi
          </h3>
        </div>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {vision}
        </p>
      </div>

      {/* Misi */}
      <div className={`${cardBgClass} p-6 sm:p-7 rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-start`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5 stroke-[2.2]" />
          </div>
          <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-slate-900">
            Misi
          </h3>
        </div>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {mission}
        </p>
      </div>
    </div>
  );
}
