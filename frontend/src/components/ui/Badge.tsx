import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "success" | "emerald" | "amber" | "neutral" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-blue-50/90 text-blue-700 border-blue-200/70",
    blue: "bg-blue-600 text-white border-blue-500",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    amber: "bg-amber-50 text-amber-700 border-amber-200/60",
    neutral: "bg-slate-100 text-slate-700 border-slate-200/70",
    outline: "bg-white/80 text-slate-700 border-slate-200/90",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-2xs font-semibold",
    md: "px-3.5 py-1 text-xs font-bold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border shadow-2xs backdrop-blur-sm select-none tracking-tight",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            variant === "blue" ? "bg-white" : variant === "success" || variant === "emerald" ? "bg-emerald-500" : "bg-blue-600"
          )}
        />
      )}
      {children}
    </span>
  );
}
