import RestaurantMenu from "../../components/restaurant-menu/restaurant-menu.jsx";
import { useOutletContext } from "react-router";

export const RestaurantMenuPage = () => {
  const { restaurant } = useOutletContext();

  return (
    <RestaurantMenu menuIds={restaurant.menu}
                    restaurantId={restaurant.id}
                    restaurantName={restaurant.name} />
  );
};