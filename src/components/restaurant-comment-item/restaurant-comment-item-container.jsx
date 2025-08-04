import RestaurantCommentItem from "./restaurant-comment-item.jsx";
import { useGetUsersQuery } from "../../data/services/api/api.js";
import { FULFILLED } from "../../data/entities/request/sliсe.js";

export const RestaurantCommentItemContainer = ({ text, rating, userId }) => {
  // const comment = useSelector((state) => selectReviewById(state, commentId));
  // const user = useSelector((state) => selectUserById(state, userId));

  const { data: users, status } = useGetUsersQuery();
  const user = users?.find((u) => u.id === userId);
  return status === FULFILLED ? (
    <RestaurantCommentItem user={user?.name} text={text} rating={rating} />
  ) : null;
};
