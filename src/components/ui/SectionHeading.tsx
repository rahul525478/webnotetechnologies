import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full text-xs font-semibold tracking-wider uppercase bg-wn-lime/10 text-wn-lime border border-wn-lime/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-wn-text-primary">
        {title}{" "}
        {highlight && (
          <span className="wn-gradient-text">{highlight}</span>
        )}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-wn-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
