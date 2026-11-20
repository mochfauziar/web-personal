import type { ReactNode } from "react";

type CalloutProps = {
  title?: string;
  variant?: "info" | "tip" | "warn";
  children: ReactNode;
};

const labelByVariant: Record<NonNullable<CalloutProps["variant"]>, string> = {
  info: "Catatan",
  tip: "Tips",
  warn: "Peringatan",
};

const borderByVariant: Record<NonNullable<CalloutProps["variant"]>, string> = {
  info: "border-[var(--accent)]",
  tip: "border-emerald-500/70",
  warn: "border-amber-500/70",
};

export function Callout({ title, variant = "info", children }: CalloutProps) {
  return (
    <aside
      className={`my-6 rounded-r-lg border-l-4 ${borderByVariant[variant]} bg-black/5 px-4 py-3 dark:bg-white/5`}
    >
      <p className="mb-1 text-sm font-semibold">{title ?? labelByVariant[variant]}</p>
      <div className="text-sm [&>p]:m-0">{children}</div>
    </aside>
  );
}
