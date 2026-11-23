import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "glass" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  href,
  isExternal,
  disabled,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-[#151514] text-white hover:bg-black shadow-lg shadow-black/10 hover:shadow-black/20 focus-visible:ring-slate-900",
    secondary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 focus-visible:ring-blue-600",
    glass:
      "bg-white/85 hover:bg-white text-slate-900 border border-white/90 shadow-sm backdrop-blur-md hover:border-blue-200 focus-visible:ring-blue-500",
    outline:
      "bg-transparent hover:bg-slate-50 text-slate-700 border border-slate-200/90 hover:border-slate-300 focus-visible:ring-slate-400",
    white:
      "bg-white text-slate-950 hover:bg-slate-100 shadow-md shadow-slate-950/10 focus-visible:ring-white",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold rounded-lg gap-1.5 min-h-[36px]",
    md: "px-6 py-3.5 text-sm font-bold rounded-xl gap-2 min-h-[44px]",
    lg: "px-8 py-4 text-base font-bold rounded-xl gap-2.5 min-h-[50px]",
  };

  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {content}
    </button>
  );
}
