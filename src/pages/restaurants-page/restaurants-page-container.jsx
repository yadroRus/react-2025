import { RestaurantsPage } from "./restaurants-page.jsx";
import { useGetRestaurantsQuery } from "../../data/services/api/api.js";

export const RestaurantsPageContainer = () => {
  // const requestStatus = useRequest(getRestaurants);
  // const restaurantsIds = useSelector(selectRestaurantsIds);

  const { data: restaurants, status: requestStatus } = useGetRestaurantsQuery();

  return <RestaurantsPage requestStatus={requestStatus} restaurants={restaurants} />;
};