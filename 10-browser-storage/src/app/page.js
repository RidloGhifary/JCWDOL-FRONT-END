"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme || "dark");
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <main
      className={styles.main}
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}>
      <button
        className={styles.toggle}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </main>
  );
}
