import { useSelector } from "react-redux";
import { selectRestaurantById, selectRestaurantsIds } from "../data/entities/restaurants/slice.js";
import { RestaurantPageLayout } from "./restaurant-page-layout.jsx";
import { useParams } from "react-router";
import { getRestaurants } from "../data/entities/restaurants/get-restaurants.js";
import { useRequest } from "../data/hooks/use-request.js";

export const RestaurantPageLayoutContainer = () => {
  const requestStatus = useRequest(getRestaurants);
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const restaurantsIds = useSelector(selectRestaurantsIds);

  return <RestaurantPageLayout restaurantsIds={restaurantsIds}
                               requestStatus={requestStatus}
                               restaurant={restaurant}></RestaurantPageLayout>;
};