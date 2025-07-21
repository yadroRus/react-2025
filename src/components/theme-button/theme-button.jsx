import classNames from "classnames";
import styles from "./theme-button.module.css";
import { useTheme } from "../theme-context/theme-context-hooks.js";
import { useEffect } from "react";

const toggleBodyClass = (value, state) => {
  document.body.classList.toggle("theme-dark", state);
};

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    toggleBodyClass("theme-dark", theme !== "dark");
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    toggleBodyClass("theme-dark", theme === "dark");
  };

  return (
    <button
      className={classNames("button", {
        [styles.dark]: theme !== "dark",
        [styles.light]: theme !== "light",
      })}
      onClick={() => toggleTheme()}
    >
      Тема {theme === "dark" ? "светлая" : "темная"}
    </button>
  );
};
