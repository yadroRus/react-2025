import { RestaurantMenuLinkItemContainer } from "../restaurant-menu-link-item/restaurant-menu-link-item-container.jsx";
import { requestText } from "../../data/hooks/use-request.js";
import { FULFILLED } from "../../data/entities/request/sliсe.js";

export default function RestaurantMenu({
  menuIds,
  restaurantId,
  restaurantName,
  requestStatus,
}) {
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
