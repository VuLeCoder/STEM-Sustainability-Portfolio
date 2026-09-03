"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeSwitch() {
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
    <button type="button" onClick={toggleTheme} aria-label="Đổi giao diện sáng tối">
      {theme === "light" ? "Chế độ tối" : "Chế độ sáng"}
    </button>
  );
}
