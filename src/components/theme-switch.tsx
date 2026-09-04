"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/constants/content";
import { siteContent } from "@/constants/content";

type Theme = "light" | "dark";

export function ThemeSwitch({ locale }: { locale: Locale }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={siteContent.ui[theme === "light" ? "switchToDark" : "switchToLight"][locale]}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--border)] px-3 text-sm font-medium text-[var(--muted)] transition-colors hover:border-[var(--primary)] hover:text-[var(--foreground)]"
    >
      <span aria-hidden="true" className="text-base leading-none">{theme === "light" ? "◐" : "☼"}</span>
      <span className="hidden sm:inline">{siteContent.ui[theme === "light" ? "lightTheme" : "darkTheme"][locale]}</span>
    </button>
  );
}
