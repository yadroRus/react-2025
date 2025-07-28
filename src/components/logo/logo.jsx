import { useNavigate } from "react-router";
import styles from "./logo.module.css";

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <a className={styles.logo}
       title="Главная страница"
       onClick={() => navigate("/")}>
      🍽️
    </a>
  );
};
