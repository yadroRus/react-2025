import styles from "./theme-button.module.css";
import { Button } from "../button/button.jsx";
import { useThemeContext } from "../theme-context/hooks.js";

export const ThemeButton = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  return (
    <Button
      onClick={toggleTheme}
      text={`Тема ${isDarkTheme() ? "темная" : "светлая"}`}
      className={isDarkTheme() ? styles.dark : styles.light}
    />
  );
};
