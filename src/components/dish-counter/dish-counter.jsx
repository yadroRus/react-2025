import { useCounter } from "./hooks.js";
import { Counter } from "../counter/counter.jsx";
import styles from "../restaurant-menu-item/restaurant-menu-item.module.css";

export const DishCounter = ({ price, dishId, min = 0, max = 5 }) => {
  const { count, totalPrice, increment, decrement } = useCounter({
    min,
    max,
    dishId,
    price,
  });

  return (
    <>
      <span className={styles.totalPrice}>{totalPrice} руб.</span>
      <Counter
        decrement={decrement}
        increment={increment}
        decrementDisabled={count <= min}
        incrementDisabled={count >= max}
        value={count}
      />
    </>
  );
};
