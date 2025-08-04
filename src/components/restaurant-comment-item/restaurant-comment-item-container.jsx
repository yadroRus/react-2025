import RestaurantCommentItem from "./restaurant-comment-item.jsx";
import { useGetUsersQuery } from "../../data/services/api/api.js";
import { FULFILLED } from "../../data/entities/request/sliсe.js";
import { useCommentEditor } from "./hooks.js";

export const RestaurantCommentItemContainer = ({ text, rating, userId, reviewId, currentUserId }) => {
  // const comment = useSelector((state) => selectReviewById(state, commentId));
  // const user = useSelector((state) => selectUserById(state, userId));

  const { correctedComment, correctedRating,editMode, editCommentHandler } = useCommentEditor();

  const { data: users, status } = useGetUsersQuery();

  const user = users?.find((u) => u.id === userId);

  const showEditButton = currentUserId === userId;

  return status === FULFILLED ? (
    <RestaurantCommentItem user={user}
                           reviewId={reviewId}
                           text={correctedComment || text}
                           rating={correctedRating || rating}
                           showEditButton={showEditButton}
                           editMode={editMode}
                           editCommentHandler={editCommentHandler}
    />
  ) : null;
};
