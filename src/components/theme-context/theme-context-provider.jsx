import { createContext } from "react";
import { useTheme } from "./hooks.js";

export const ThemeContext = createContext("light");

export const ThemeContextProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
