import { RestaurantMenuLinkItemContainer } from "../restaurant-menu-link-item/restaurant-menu-link-item-container.jsx";

export default function RestaurantMenu({
  menuIds,
  restaurantId,
  restaurantName,
}) {
  if (!menuIds) {
    return null;
  }
  return (
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
