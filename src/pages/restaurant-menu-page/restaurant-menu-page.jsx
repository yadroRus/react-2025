import RestaurantMenu from "../../components/restaurant-menu/restaurant-menu.jsx";
import { useOutletContext } from "react-router";

export const RestaurantMenuPage = () => {
  const { menuIds, name } = useOutletContext();

  return (
    <RestaurantMenu menuIds={menuIds} restaurantName={name} />
  );
};