import RestaurantTile from "../restaurant-tile/restaurant-tile.jsx";
import { useState } from "react";
import { Tab } from "../tab/Tab.jsx";
import "./restaurant-tabs.css";

function RestaurantTabs({ restaurants }) {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id,
  );

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeRestaurantId,
  );

  const handleTabClick = (id) => {
    if (activeRestaurantId === id) return;
    setActiveRestaurantId(id);
  };

  return (
    <>
      <div className="tabs-triggers">
        {restaurants.map((restaurant) => (
          <Tab
            key={restaurant.id}
            name={restaurant.name}
            active={String(activeRestaurantId === restaurant.id)}
            onClick={() => handleTabClick(restaurant.id)}
          />
        ))}
      </div>
      <div className="tabs-body">
        <RestaurantTile
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      </div>
    </>
  );
}

export default RestaurantTabs;
