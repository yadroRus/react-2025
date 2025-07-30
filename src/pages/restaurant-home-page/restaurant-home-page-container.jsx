import { RestaurantHomePage } from "./restaurant-home-page.jsx";
import { useOutletContext } from "react-router";

export const RestaurantHomePageContainer = () => {
  const { restaurant, restaurantRequestStatus } = useOutletContext();

  return (
    <RestaurantHomePage restaurant={restaurant}
                        name={restaurant.name}
                        menuIds={restaurant.menu}
                        reviewsIds={restaurant.reviews}
                        restaurantId={restaurant.id}
                        restaurantRequestStatus={restaurantRequestStatus}
    />
  );
};
