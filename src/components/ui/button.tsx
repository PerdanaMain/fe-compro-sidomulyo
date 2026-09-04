import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
  external = false
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded hover:opacity-95 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider uppercase font-semibold",
    md: "px-6 py-3 text-sm tracking-wider uppercase font-semibold",
    lg: "px-8 py-4 text-base tracking-wider uppercase font-bold"
  };

  const variantStyles = {
    primary: "bg-amber-500 text-slate-950 hover:bg-amber-400 active:bg-amber-600 shadow-md border border-amber-400/50",
    secondary: "bg-blue-800 text-white hover:bg-blue-700 active:bg-blue-900 shadow-md border border-blue-700/50",
    outline: "bg-transparent text-white border-2 border-white/80 hover:bg-white/10 hover:border-white",
    whatsapp: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg border border-emerald-500/50"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
