import { createContext } from "react";
import { useTheme } from "./hooks.js";

export const ThemeContext = createContext("light");

export const ThemeContextProvider = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ThemeContext value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext>
  );
};
