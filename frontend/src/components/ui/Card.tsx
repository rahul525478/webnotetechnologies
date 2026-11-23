import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "card" | "plain";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "surface",
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    surface: "glass-surface",
    card: "glass-card",
    plain: "bg-white/90 border border-slate-200/80 shadow-xs",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 transition-all duration-200",
        variantStyles[variant],
        hoverEffect && "hover:border-blue-300 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
