import styles from "./restaurant-comment-item.module.css";

function RestaurantCommentItem({ author, comment, rating }) {
  return (
    <li className={styles.item}>
      <div>
        {author} - <span className={styles.rating}>{rating}</span>
      </div>
      <div className={styles.comment}>{comment}</div>
    </li>
  );
}

export default RestaurantCommentItem;
