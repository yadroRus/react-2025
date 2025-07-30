import { useLoginContext } from "../../components/login-context/hooks.js";
import { RestaurantReviewsPage } from "./restaurant-reviews-page.jsx";
import { useOutletContext } from "react-router";

export const RestaurantReviewsPageContainer = () => {
  const { restaurant } = useOutletContext();
  const { user } = useLoginContext();
  return (
    <RestaurantReviewsPage user={user} reviewsIds={restaurant.reviews} restaurantId={restaurant.id}></RestaurantReviewsPage>
  );
};