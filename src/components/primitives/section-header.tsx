import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "reveal mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-[--brand-lime]" : "text-[--brand-sage]"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-[var(--font-display)] text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-[--ink]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
            align === "center" && "mx-auto",
            light ? "text-white/70" : "text-[--muted]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
