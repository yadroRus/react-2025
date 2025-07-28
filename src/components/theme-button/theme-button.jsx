import styles from "./theme-button.module.css";
import { useThemeContext } from "../theme-context/hooks.js";

export const ThemeButton = () => {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  return (
    <button onClick={toggleTheme} className={styles.button}>
      {isDarkTheme ? "🌛" : "🔆"}
    </button>
  );
};
