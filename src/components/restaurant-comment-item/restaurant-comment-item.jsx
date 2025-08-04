import styles from "./restaurant-comment-item.module.css";
import { StarsRating } from "../stars-rating/stars-rating.jsx";
import { Button } from "../button/button.jsx";
import { useRef } from "react";

function RestaurantCommentItem({
                                 user,
                                 text,
                                 rating,
                                 showEditButton,
                                 editMode,
                                 reviewId,
                                 editCommentHandler
                               }) {

  const refText = useRef(null);
  const refRating = useRef(null);

  return (
    <li className={styles.item}>
      <div>
        {user.name}:
        {editMode ? (
          <>
            <input ref={refText} type="text" defaultValue={text} />
            <input ref={refRating} type="text" defaultValue={rating} />
          </>
        ) : (
          <span className={styles.comment}>{text}</span>
        )}
        {showEditButton ? (
          <Button text="Править" onClick={() => editCommentHandler({
            reviewId,
            text: refText?.current?.value,
            userId: user.id,
            rating: refRating?.current?.value
          })} />
        ) : null}
      </div>
      <StarsRating value={rating} />
    </li>
  );
}

export default RestaurantCommentItem;
