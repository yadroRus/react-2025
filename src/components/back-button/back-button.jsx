import { useNavigate } from "react-router";
import styles from "./back-button.module.css";

export const BackButton = () => {
  const navigate = useNavigate();

  const showButton = window.location.pathname !== "/";
  return showButton ? (
    <button className={styles.button} onClick={() => navigate(-1)}>
      ➜
    </button>
  ) : null;
};
