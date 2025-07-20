import RestaurantTile from "../restaurant-tile/restaurant-tile.jsx";
import { useState } from "react";
import { Tab } from "../tab/Tab.jsx";
import styles from "./restaurant-tabs.module.css";

function RestaurantTabs({ restaurants }) {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id
  );

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeRestaurantId
  );

  const handleTabClick = (id) => {
    if (activeRestaurantId === id) return;
    setActiveRestaurantId(id);
  };

  return (
    <>
      <div className={styles["tabs-triggers"]}>
        {restaurants.map((restaurant) => (
          <Tab
            key={restaurant.id}
            name={restaurant.name}
            active={Boolean(activeRestaurantId === restaurant.id)}
            onClick={() => handleTabClick(restaurant.id)}
          />
        ))}
      </div>
      <RestaurantTile
        name={activeRestaurant.name}
        menu={activeRestaurant.menu}
        reviews={activeRestaurant.reviews}
      />
    </>
  );
}

export default RestaurantTabs;
