import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "blue" | "dark" | "outline";
  className?: string;
}

export function Badge({ children, variant = "amber", className = "" }: BadgeProps) {
  const variantStyles = {
    amber: "bg-amber-500/10 text-amber-600 border border-amber-500/30",
    blue: "bg-blue-600/10 text-blue-700 border border-blue-600/30",
    dark: "bg-slate-900 text-amber-400 border border-slate-700",
    outline: "bg-white/80 text-slate-700 border border-slate-200"
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
