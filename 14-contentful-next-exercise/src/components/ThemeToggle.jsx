"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme || "light");
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <button
      className=" border-2 w-fit px-6 border-black p-2 rounded-full dark:border-white"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
