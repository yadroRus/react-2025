import { useSelector } from "react-redux";
import { selectRestaurantById, selectRestaurantsIds } from "../data/entities/restuarants/slice.js";
import { RestaurantPageLayout } from "./restaurant-page-layout.jsx";
import { useParams } from "react-router";

export const RestaurantPageLayoutContainer = () => {
  const {restaurantId} = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return <RestaurantPageLayout restaurantsIds={restaurantsIds} restaurant={restaurant}></RestaurantPageLayout>;
};