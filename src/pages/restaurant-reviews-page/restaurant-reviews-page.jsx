import RestaurantComments from "../../components/restaurant-comments/restaurant-comments.jsx";
import { ReviewForm } from "../../components/review-form/review-form.jsx";
import { FULFILLED } from "../../data/entities/request/sliсe.js";
import { requestText } from "../../data/hooks/use-request.js";

export const RestaurantReviewsPage = ({ user, reviews, restaurantId, requestStatus }) => {
  return requestStatus !== FULFILLED ?
    requestText(requestStatus) : (
      <>
        <RestaurantComments reviews={reviews} />
        {user.name && <ReviewForm restaurantId={restaurantId} />}
      </>
    );
};