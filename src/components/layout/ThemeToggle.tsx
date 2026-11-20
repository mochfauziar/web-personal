"use client";
import { useTheme } from "next-themes";

// resolvedTheme undefined saat render pertama (SSR); suppressHydrationWarning
// menjamin tidak ada warning konsol saat ikon "dikoreksi" setelah hydrasi.
// Pendekatan ini menghindari pola setState-di-dalam-effect.
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      suppressHydrationWarning
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap"}
      title={isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap"}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-lg hover:bg-black/5 dark:hover:bg-white/10"
    >
      <span aria-hidden="true" suppressHydrationWarning>
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
}
