import { useLoginContext } from "../../components/login-context/hooks.js";
import RestaurantComments from "../../components/restaurant-comments/restaurant-comments.jsx";
import { ReviewForm } from "../../components/review-form/review-form.jsx";
import { useOutletContext } from "react-router";

export const RestaurantReviewPage = () => {
  const { reviewsIds } = useOutletContext();
  const { user } = useLoginContext();
  return (
    <>
      <RestaurantComments commentsIds={reviewsIds} />
      {user && <ReviewForm />}
    </>
  );
};