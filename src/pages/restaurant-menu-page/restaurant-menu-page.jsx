import { useOutletContext } from "react-router";
import { RestaurantMenuContainer } from "../../components/restaurant-menu/restaurant-menu-container.jsx";

export const RestaurantMenuPage = () => {
  const { restaurant } = useOutletContext();

  return (
    <RestaurantMenuContainer menuIds={restaurant.menu}
                             restaurantId={restaurant.id}
                             restaurantName={restaurant.name} />
  );
};