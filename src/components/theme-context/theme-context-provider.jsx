import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
