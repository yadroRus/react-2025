import { Button } from "../button/button.jsx";
import styles from "./cart-clear-all-button.module.css";

export const CartClearAllButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} text="Удалить все" className={styles.button} />
  );
};
