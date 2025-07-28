import styles from "../restaurant-menu-item/restaurant-menu-item.module.css";
import { Link } from "react-router";
import linkStyles from "./restaurant-menu-link-item.module.css";
import { DishCounter } from "../dish-counter/dish-counter.jsx";
import { useLoginContext } from "../login-context/hooks.js";

function RestaurantMenuLinkItem({
  dishId,
  name,
  price,
  restaurantId,
  restaurantName,
}) {
  const { user } = useLoginContext();

  return (
    <li className={styles.item}>
      <Link
        to={`/dish/${dishId}?restaurantName=${restaurantName}&restaurantId=${restaurantId}`}
        className={linkStyles.link}
      >
        {name} <span className={styles.price}>({price} руб.)</span>
        <div className={styles.labels}>
          <span className={linkStyles.details}>подробнее...</span>
        </div>
      </Link>
      {user && (
        <div className={styles.counterWrapper}>
          <DishCounter dishId={dishId} price={price} />
        </div>
      )}
    </li>
  );
}

export default RestaurantMenuLinkItem;
