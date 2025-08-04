import { RestaurantCommentItemContainer } from "../restaurant-comment-item/restaurant-comment-item-container.jsx";

export default function RestaurantComments({ reviews, userId }) {
  if (!reviews) {
    return null;
  }

  return (
    <ul>
      {reviews.map((review) => (
        <RestaurantCommentItemContainer
          key={review.id}
          reviewId={review.id}
          userId={review.userId}
          text={review.text}
          rating={review.rating}
          currentUserId={userId}
        />
      ))}
    </ul>
  );
}
