import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./theme-context-provider.jsx";

const toggleBodyClass = (state, value = "theme-dark") => {
  document.body.classList.toggle(value, state);
};

export const useThemeContext = () => useContext(ThemeContext);

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    toggleBodyClass(isDarkTheme());
  }, []);

  const isDarkTheme = () => theme === "dark";

  const toggleTheme = () => {
    const isDark = isDarkTheme();
    setTheme(isDark ? "light" : "dark");
    toggleBodyClass(!isDark);
  };

  return { toggleTheme, isDarkTheme };
};
