import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../data/entities/restuarants/slice.js";
import { RestaurantPage } from "./restaurant-page.jsx";

export const RestaurantPageContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  return <RestaurantPage restaurantsIds={restaurantsIds}></RestaurantPage>;
};