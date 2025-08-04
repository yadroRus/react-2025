import { useLoginContext } from "../../components/login-context/hooks.js";
import { RestaurantReviewsPage } from "./restaurant-reviews-page.jsx";
import { useOutletContext } from "react-router";
import { useAddReviewMutation, useGetReviewsQuery } from "../../data/services/api/api.js";

export const RestaurantReviewsPageContainer = () => {
  const { restaurant } = useOutletContext();
  const { user } = useLoginContext();
  // const requestStatusUser = useRequest(getUsers);
  // const requestStatusReviews = useRequest(getReviews, restaurant.id);
  // const requestStatus = requestStatusUser === FULFILLED && requestStatusReviews === FULFILLED ?
  //   FULFILLED : PENDING;

  const { data: restaurantReviews, status: requestStatus } = useGetReviewsQuery(restaurant.id);


  const [addReview, isAddReviewLoading] = useAddReviewMutation();

  const handelOnReview = (form) => {
    addReview({
      restaurantId: restaurant.id,
      review: {
        text: form.comment,
        rating: form.rating,
        userId: user.userId
      }
    });
  };

  return <RestaurantReviewsPage user={user}
                                reviews={restaurantReviews}
                                restaurantId={restaurant.id}
                                requestStatus={requestStatus}
                                onReviewSubmit={handelOnReview}
  />;
};