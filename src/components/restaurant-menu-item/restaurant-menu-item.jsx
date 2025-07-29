import { DishCounter } from "../dish-counter/dish-counter.jsx";
import styles from "./restaurant-menu-item.module.css";
import { useLoginContext } from "../login-context/hooks.js";

function RestaurantMenuItem({ dishId, name, price, ingredients }) {
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
      {user.name && (
        <div className={styles.counterWrapper}>
          <DishCounter dishId={dishId} price={price} />
        </div>
      )}
    </li>
  );
}

export default RestaurantMenuItem;
