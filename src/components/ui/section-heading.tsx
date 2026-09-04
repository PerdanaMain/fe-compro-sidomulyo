import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = ""
}: SectionHeadingProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 ${alignStyles[align]} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="h-0.5 w-6 bg-amber-500 rounded-full inline-block"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            {eyebrow}
          </span>
          {align === "center" && (
            <span className="h-0.5 w-6 bg-amber-500 rounded-full inline-block"></span>
          )}
        </div>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
