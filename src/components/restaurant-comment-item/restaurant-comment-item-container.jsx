import RestaurantCommentItem from "./restaurant-comment-item.jsx";
import { useSelector } from "react-redux";
import { selectReviewById } from "../../data/entities/reviews/slice.js";
import { selectUserById } from "../../data/entities/users/slice.js";

export const RestaurantCommentItemContainer = ({ commentId }) => {
  const comment = useSelector((state) => selectReviewById(state, commentId));
  const user = useSelector((state) => selectUserById(state, comment.userId));
  return (
    <RestaurantCommentItem
      user={user.name}
      text={comment.text}
      rating={comment.rating}
    />
  );
};
