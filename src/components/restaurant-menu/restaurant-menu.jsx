import { RestaurantMenuLinkItemContainer } from "../restaurant-menu-link-item/restaurant-menu-link-item-container.jsx";

export default function RestaurantMenu({ menuIds, restaurantName }) {
  if (!menuIds) {
    return null;
  }
  return (
    <ul>
      {menuIds.map((id) => (
        <RestaurantMenuLinkItemContainer
          key={id}
          dishId={id}
          restaurantName={restaurantName}
        />
      ))}
    </ul>
  );
}
