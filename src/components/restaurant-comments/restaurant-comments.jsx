import { RestaurantCommentItemContainer } from "../restaurant-comment-item/restaurant-comment-item-container.jsx";

export default function RestaurantComments({ commentsIds }) {
  if (!commentsIds) {
    return null;
  }

  return (
    <ul>
      {commentsIds.map((id) => (
        <RestaurantCommentItemContainer key={id} commentId={id} />
      ))}
    </ul>
  );
}
