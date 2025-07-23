import styles from "./restaurant-comment-item.module.css";
import { StarsRating } from "../stars-rating/stars-rating.jsx";

function RestaurantCommentItem({ user, text, rating }) {
  return (
    <li className={styles.item}>
      <div>
        {user}: <span className={styles.comment}>{text}</span>
      </div>
      <StarsRating value={rating} />
    </li>
  );
}

export default RestaurantCommentItem;
