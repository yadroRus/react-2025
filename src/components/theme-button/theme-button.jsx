import classNames from "classnames";
import styles from "./theme-button.module.css";
import { useTheme } from "../theme-context/theme-context-hooks.js";
import { useEffect } from "react";

const toggleBodyClass = (state, value = "theme-dark") => {
  document.body.classList.toggle(value, state);
};

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    toggleBodyClass(theme !== "dark");
  }, []);

  const toggleTheme = () => {
    const isDark = theme === "dark";
    setTheme(isDark ? "light" : "dark");
    toggleBodyClass(isDark);
  };

  return (
    <button
      className={classNames("button", {
        [styles.dark]: theme !== "dark",
        [styles.light]: theme !== "light"
      })}
      onClick={() => toggleTheme()}
    >
      Тема {theme === "dark" ? "светлая" : "темная"}
    </button>
  );
};
