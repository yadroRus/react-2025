import RestaurantComments from "../restaurant-comments/restaurant-comments.jsx";
import RestaurantMenu from "../restaurant-menu/restaurant-menu.jsx";
import { ReviewForm } from "../review-form/review-form.jsx";
import styles from "./restaurant-tile.module.css";
import { useLoginContext } from "../login-context/hooks.js";

function RestaurantTile({ name, menuIds, reviewsIds }) {
  const { user } = useLoginContext();
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <RestaurantMenu menuIds={menuIds} />
      <RestaurantComments commentsIds={reviewsIds} />
      {user && <ReviewForm />}
    </div>
  );
}

export default RestaurantTile;
