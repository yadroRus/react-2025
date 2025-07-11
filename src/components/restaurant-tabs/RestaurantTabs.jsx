import RestaurantTile from "../restaurant-tile/restaurant-tile.jsx";
import { useState } from "react";
import { Tab } from "../tab/Tab.jsx";
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
          <Tab
            key={restaurant.id}
            name={restaurant.name}
            active={String(activeRestaurant.id === restaurant.id)}
            onClick={(e) => handleTabClick(e, restaurant.id)}
          />
        ))}
      </div>
      <div className="tabs-body">
        <RestaurantTile {...activeRestaurant} />
      </div>
    </>
  );
}

export default RestaurantTabs;
