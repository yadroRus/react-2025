import RestaurantTile from "./restaurant-tile.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../data/entities/restuarants/slice.js";

export const RestaurantTileContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <RestaurantTile
      id={restaurantId}
      name={restaurant.name}
      img={restaurant.img}
    />
  );
};
