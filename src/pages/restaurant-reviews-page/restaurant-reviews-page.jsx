import RestaurantComments from "../../components/restaurant-comments/restaurant-comments.jsx";
import { ReviewForm } from "../../components/review-form/review-form.jsx";
import { FULFILLED } from "../../data/entities/request/sliсe.js";
import { requestText } from "../../data/hooks/use-request.js";

export const RestaurantReviewsPage = ({
                                        user,
                                        reviews,
                                        restaurantId,
                                        requestStatus,
                                        onReviewSubmit
                                      }) => {
  return requestStatus !== FULFILLED && !reviews ?
    requestText(requestStatus) : (
      <>
        <RestaurantComments reviews={reviews} userId={user.userId} />
        {user.name && <ReviewForm restaurantId={restaurantId} onSubmit={onReviewSubmit}/>}
      </>
    );
};