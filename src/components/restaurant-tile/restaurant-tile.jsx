import RestaurantComments from "../restaurant-comments/restaurant-comments.jsx";
import RestaurantMenu from "../restaurant-menu/restaurant-menu.jsx";
import { ReviewForm } from "../review-form/review-form.jsx";
import styles from "./restaurant-tile.module.css";

function RestaurantTile({ name, menu, reviews }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <RestaurantMenu menu={menu} />
      <RestaurantComments comments={reviews} />
      <ReviewForm />
    </div>
  );
}

export default RestaurantTile;
