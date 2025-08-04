import { RestaurantPageLayout } from "./restaurant-page-layout.jsx";
import { useGetRestaurantsQuery } from "../data/services/api/api.js";

export const RestaurantPageLayoutContainer = () => {
  const { data: restaurants, status: requestStatus } = useGetRestaurantsQuery();

  return <RestaurantPageLayout restaurants={restaurants}
                               requestStatus={requestStatus}></RestaurantPageLayout>;
};