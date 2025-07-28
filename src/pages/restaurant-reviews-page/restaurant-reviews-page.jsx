import RestaurantComments from "../../components/restaurant-comments/restaurant-comments.jsx";
import { ReviewForm } from "../../components/review-form/review-form.jsx";

export const RestaurantReviewsPage = ({ user, reviewsIds, restaurantId }) => {
  return (
    <>
      <RestaurantComments commentsIds={reviewsIds} />
      {user.name && <ReviewForm restaurantId={restaurantId}/>}
    </>
  );
};