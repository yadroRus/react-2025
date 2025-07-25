import { ThemeContext, useTheme } from "./hooks.js";

export const ThemeContextProvider = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <ThemeContext value={{ isDarkTheme, toggleTheme }}>{children}</ThemeContext>
  );
};
