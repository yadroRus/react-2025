import { useSelector } from "react-redux";
import { selectDishById } from "../../data/entities/dishes/slice.js";
import RestaurantMenuLinkItem from "./restaurant-menu-link-item.jsx";

export const RestaurantMenuLinkItemContainer = ({
  dishId,
  restaurantId,
  restaurantName,
}) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <RestaurantMenuLinkItem
      dishId={dishId}
      name={dish?.name}
      price={dish?.price}
      restaurantId={restaurantId}
      restaurantName={restaurantName}
    />
  );
};
