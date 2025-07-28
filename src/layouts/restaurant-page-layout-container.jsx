import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../data/entities/restuarants/slice.js";
import { RestaurantPageLayout } from "./restaurant-page-layout.jsx";

export const RestaurantPageLayoutContainer = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  return <RestaurantPageLayout restaurantsIds={restaurantsIds}></RestaurantPageLayout>;
};