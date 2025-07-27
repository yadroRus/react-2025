import { DishCounter } from "../dish-counter/dish-counter.jsx";
import styles from "../restaurant-menu-item/restaurant-menu-item.module.css";
import { Button } from "../button/button.jsx";

export const CartItem = ({ dishId, name, price, onRemoveClick }) => {
  return (
    <li className={styles.item}>
      <div>{name}</div>
      <div className={styles.counterWrapper}>
        <DishCounter dishId={dishId} price={price} />
        <Button onClick={onRemoveClick} text="Убрать" />
      </div>
    </li>
  );
};
