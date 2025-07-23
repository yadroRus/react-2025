import { DishCounter } from "../dish-counter/dish-counter.jsx";
import { useState } from "react";
import styles from "./restaurant-menu-item.module.css";
import { useLoginContext } from "../login-context/hooks.js";

function RestaurantMenuItem({ name, price, ingredients }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const onCounterChange = (count) => setTotalPrice(count * price);

  const { user } = useLoginContext();

  return (
    <li className={styles.item}>
      <div>
        <div>
          {name} <span className={styles.price}>({price} руб.)</span>
        </div>
        <div className={styles.labels}>
          {ingredients.map((item, i) => (
            <span key={i} className={styles.label}>
              {item}
            </span>
          ))}
        </div>
      </div>
      {user && (
        <div className={styles.counterWrapper}>
          <span className={styles.totalPrice}>{totalPrice} руб.</span>
          <DishCounter onCounterChange={onCounterChange} />
        </div>
      )}
    </li>
  );
}

export default RestaurantMenuItem;
