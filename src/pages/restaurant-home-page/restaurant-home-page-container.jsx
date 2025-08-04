import { RestaurantHomePage } from "./restaurant-home-page.jsx";
import { useParams } from "react-router";
import { useGetRestaurantByIdQuery } from "../../data/services/api/api.js";

export const RestaurantHomePageContainer = () => {

  const { restaurantId } = useParams();

  const { data: restaurant, status: restaurantRequestStatus } = useGetRestaurantByIdQuery(restaurantId);

  return (
    <RestaurantHomePage restaurant={restaurant}
                        restaurantRequestStatus={restaurantRequestStatus}
    />
  );
};
