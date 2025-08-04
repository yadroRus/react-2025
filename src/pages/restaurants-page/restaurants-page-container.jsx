import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../data/entities/restaurants/slice.js";
import { getRestaurants } from "../../data/entities/restaurants/get-restaurants.js";
import { useRequest } from "../../data/hooks/use-request.js";
import { RestaurantsPage } from "./restaurants-page.jsx";

export const RestaurantsPageContainer = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector(selectRestaurantsIds);
  return <RestaurantsPage requestStatus={requestStatus} restaurantsIds={restaurantsIds} />;
};