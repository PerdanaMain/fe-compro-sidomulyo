import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = "", hoverEffect = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-slate-200/80 shadow-sm overflow-hidden ${
        hoverEffect ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
