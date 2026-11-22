import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "lime";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const variants = {
  primary:
    "bg-wn-lime text-wn-black font-semibold hover:bg-wn-lime-dark shadow-md hover:shadow-lg",
  secondary:
    "bg-wn-navy text-white font-semibold hover:bg-wn-navy-light",
  outline:
    "border border-white/20 text-wn-text-primary hover:border-wn-lime hover:text-wn-lime bg-transparent",
  ghost:
    "text-wn-text-secondary hover:text-wn-text-primary bg-transparent hover:bg-white/5",
  lime:
    "bg-gradient-to-r from-wn-lime to-wn-lime-dark text-wn-black font-bold hover:shadow-[0_0_30px_rgba(197,224,23,0.3)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
