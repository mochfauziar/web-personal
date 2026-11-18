"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap"}
      title={isDark ? "Aktifkan tema terang" : "Aktifkan tema gelap"}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-lg hover:bg-black/5 dark:hover:bg-white/10"
    >
      <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
    </button>
  );
}