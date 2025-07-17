import { DishCounter } from "../dish-counter/dish-counter.jsx";
import { useState } from "react";
import styles from "./restaurant-menu-item.module.css";

function RestaurantMenuItem({ name, price, ingredients }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const onCounterChange = (count) => setTotalPrice(count * price);

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
      <div className={styles.counterWrapper}>
        <span>{totalPrice} руб.</span>
        <DishCounter onCounterChange={onCounterChange} />
      </div>
    </li>
  );
}

export default RestaurantMenuItem;
