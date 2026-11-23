import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "default" | "blue" | "success" | "neutral" | "outline";
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "default",
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-4", isCenter ? "flex justify-center" : "")}>
          <Badge variant={badgeVariant} dot>
            <span>{badge}</span>
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]",
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg text-slate-600 leading-relaxed font-normal mt-4 sm:mt-5",
            isCenter ? "max-w-2xl mx-auto" : "",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
