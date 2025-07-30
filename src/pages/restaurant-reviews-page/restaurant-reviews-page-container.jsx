import { useLoginContext } from "../../components/login-context/hooks.js";
import { RestaurantReviewsPage } from "./restaurant-reviews-page.jsx";
import { useOutletContext } from "react-router";
import { useRequest } from "../../data/hooks/use-request.js";
import { getReviews } from "../../data/entities/reviews/get-reviews.js";
import { getUsers } from "../../data/entities/users/get-users.js";

export const RestaurantReviewsPageContainer = () => {
  const { restaurant } = useOutletContext();
  const { user } = useLoginContext();
  useRequest(getUsers);

  const requestStatus = useRequest(getReviews, restaurant.id);
  return (
    <RestaurantReviewsPage user={user}
                           reviewsIds={restaurant.reviews}
                           restaurantId={restaurant.id}
                           requestStatus={requestStatus}></RestaurantReviewsPage>
  );
};