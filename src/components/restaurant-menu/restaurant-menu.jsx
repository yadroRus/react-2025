import { RestaurantMenuItemContainer } from "../restaurant-menu-item/restaurant-menu-item-container.jsx";

export default function RestaurantMenu({ menuIds }) {
  if (!menuIds) {
    return null;
  }
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menuIds.map((id) => (
          <RestaurantMenuItemContainer key={id} dishId={id} />
        ))}
      </ul>
    </>
  );
}
