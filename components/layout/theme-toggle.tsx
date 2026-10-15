"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    media.removeEventListener("change", callback);
  };
}

function getSnapshot(): "light" | "dark" {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getServerSnapshot(): "light" | "dark" {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      aria-pressed={theme === "dark"}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border bg-surface text-foreground transition-colors hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
    >
      {theme === "light" ? (
        <MoonIcon size={18} className="text-foreground" />
      ) : (
        <SunIcon size={18} className="text-foreground" />
      )}
    </button>
  );
}
