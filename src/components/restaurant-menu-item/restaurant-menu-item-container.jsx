import { useSelector } from "react-redux";
import { selectDishById } from "../../data/entities/dishes/slice.js";
import RestaurantMenuItem from "./restaurant-menu-item.jsx";

export const RestaurantMenuItemContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <RestaurantMenuItem
      dishId={dishId}
      name={dish.name}
      price={dish.price}
      ingredients={dish.ingredients}
    />
  );
};
