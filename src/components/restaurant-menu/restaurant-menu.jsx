import RestaurantMenuItem from "../restaurant-menu-item/restaurant-menu-item.jsx";

export default function RestaurantMenu({ menu }) {
  if (!menu) {
    return null;
  }

  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ id, name, price, ingredients }) => (
          <RestaurantMenuItem
            key={id}
            name={name}
            price={price}
            ingredients={ingredients}
          />
        ))}
      </ul>
    </>
  );
}
