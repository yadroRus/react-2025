import { RestaurantMenuLinkItemContainer } from "../restaurant-menu-link-item/restaurant-menu-link-item-container.jsx";
import { requestText, useRequest } from "../../data/hooks/use-request.js";
import { getDishes } from "../../data/entities/dishes/get-dishes.js";
import { FULFILLED } from "../../data/entities/request/sliсe.js";

export default function RestaurantMenu({
  menuIds,
  restaurantId,
  restaurantName,
}) {
  const requestStatus = useRequest(getDishes, restaurantId);

  if (!menuIds) {
    return null;
  }

  return requestStatus !== FULFILLED ? (
    requestText(requestStatus)
  ) : (
    <ul>
      {menuIds.map((id) => (
        <RestaurantMenuLinkItemContainer
          key={id}
          dishId={id}
          restaurantId={restaurantId}
          restaurantName={restaurantName}
        />
      ))}
    </ul>
  );
}
