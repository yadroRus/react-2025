import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../data/entities/restuarants/slice.js";
import { RestaurantHomePage } from "./restaurant-home-page.jsx";
import { useOutletContext } from "react-router";

export const RestaurantHomePageContainer = () => {
  const { restaurantId } = useOutletContext();

  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  return (
    <RestaurantHomePage
      name={restaurant.name}
      menuIds={restaurant.menu}
      reviewsIds={restaurant.reviews}
    />
  );
};
