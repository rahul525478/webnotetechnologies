import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "lime" | "navy" | "outline";
  className?: string;
}

const badgeVariants = {
  default: "bg-white/10 text-wn-text-secondary",
  lime: "bg-wn-lime/10 text-wn-lime border border-wn-lime/20",
  navy: "bg-wn-navy/20 text-blue-300 border border-wn-navy/30",
  outline: "border border-white/20 text-wn-text-secondary",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
