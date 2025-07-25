import RestaurantCommentItem from "../restaurant-comment-item/restaurant-comment-item.jsx";
import { RestaurantCommentItemContainer } from "../restaurant-comment-item/restaurant-comment-item-container.jsx";

export default function RestaurantComments({ commentsIds }) {
  if (!commentsIds) {
    return null;
  }

  return (
    <>
      <h3>Отзывы / Оценки</h3>
      <ul>
        {commentsIds.map((id) => (
          <RestaurantCommentItemContainer key={id} commentId={id} />
        ))}
      </ul>
    </>
  );
}
