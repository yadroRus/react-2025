import { RestaurantCommentItemContainer } from "../restaurant-comment-item/restaurant-comment-item-container.jsx";

export default function RestaurantComments({ reviews }) {
  if (!reviews) {
    return null;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <RestaurantCommentItemContainer
          key={review.id}
          userId={review.userId}
          text={review.text}
          rating={review.rating}
        />
      ))}
    </ul>
  );
}
