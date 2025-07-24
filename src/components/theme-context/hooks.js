import { createContext, useContext, useState } from "react";

const toggleBodyClass = (state, value = "theme-dark") => {
  document.body.classList.toggle(value, state);
};

export const ThemeContext = createContext("light");

export const useThemeContext = () => useContext(ThemeContext);

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
    toggleBodyClass(!isDarkTheme);
  };

  return { toggleTheme, isDarkTheme };
};
