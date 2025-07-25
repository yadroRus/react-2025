import RestaurantTile from "./restaurant-tile.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../data/entities/restuarants/slice.js";

export const RestaurantTileContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <RestaurantTile
      name={restaurant.name}
      menuIds={restaurant.menu}
      reviewsIds={restaurant.reviews}
    />
  );
};
