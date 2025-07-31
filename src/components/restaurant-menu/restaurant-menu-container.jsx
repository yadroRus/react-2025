import { useRequest } from "../../data/hooks/use-request.js";
import { getDishes } from "../../data/entities/dishes/get-dishes.js";
import RestaurantMenu from "./restaurant-menu.jsx";

export const RestaurantMenuContainer = ({
  menuIds,
  restaurantId,
  restaurantName,
}) => {
  const requestStatus = useRequest(getDishes, restaurantId);

  return (
    <RestaurantMenu
      requestStatus={requestStatus}
      menuIds={menuIds}
      restaurantId={restaurantId}
      restaurantName={restaurantName}
    />
  );
};
