import styles from "./cart-total-price.module.css";

export const CartTotalPrice = ({ totalPrice }) => {
  return <div className={styles.text}>Общая стоимость: {totalPrice} руб.</div>;
};
