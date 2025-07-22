import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./theme-context-provider.jsx";

const toggleBodyClass = (state, value = "theme-dark") => {
  document.body.classList.toggle(value, state);
};

export const useThemeContext = () => useContext(ThemeContext);

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    toggleBodyClass(theme !== "dark");
  }, []);

  const toggleTheme = () => {
    const isDark = theme === "dark";
    setTheme(isDark ? "light" : "dark");
    toggleBodyClass(isDark);
  };

  return { theme, toggleTheme };
};
