import styles from "./theme-button.module.css";
import { Button } from "../button/button.jsx";
import { useThemeContext } from "../theme-context/hooks.js";

export const ThemeButton = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button
      onClick={toggleTheme}
      text="Тема"
      className={theme === "dark" ? styles.dark : styles.light}
    />
  );
};
