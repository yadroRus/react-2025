import { NavLink } from "react-router";
import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <NavLink className={styles.logo} to="/" title="Главная страница">🏠</NavLink>
  );
};
