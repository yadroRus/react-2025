import RestaurantTile from "../restaurant-tile/restaurant-tile.jsx";
import { useState } from "react";
import "./restaurant-tabs.css";

function RestaurantTabs({ restaurants }) {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  const handleTabClick = (e, id) => {
    if (activeRestaurant.id === id) return;
    const nextRestaurant = restaurants.find(
      (restaurant) => restaurant.id === id,
    );
    nextRestaurant && setActiveRestaurant(nextRestaurant);
  };

  return (
    <>
      <div className="tabs-triggers">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="tabs-trigger"
            active={String(activeRestaurant.id === restaurant.id)}
            onClick={(e) => handleTabClick(e, restaurant.id)}
          >
            {restaurant.name}
          </div>
        ))}
      </div>
      <div className="tabs-body">
        <RestaurantTile {...activeRestaurant} />
      </div>
    </>
  );
}

export default RestaurantTabs;
