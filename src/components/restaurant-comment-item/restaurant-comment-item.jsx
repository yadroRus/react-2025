import styles from "./restaurant-comment-item.module.css";
import { StarsRating } from "../stars-rating/stars-rating.jsx";

function RestaurantCommentItem({ author, comment, rating }) {
  return (
    <li className={styles.item}>
      <div>
        {author}: <span className={styles.comment}>{comment}</span>
      </div>
      <StarsRating value={rating} />
    </li>
  );
}

export default RestaurantCommentItem;
