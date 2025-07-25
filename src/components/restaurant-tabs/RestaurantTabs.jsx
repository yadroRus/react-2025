import { useState } from "react";
import styles from "./restaurant-tabs.module.css";
import { RestaurantTabContainer } from "../restaurant-tab-container/restaurant-tab-container.jsx";
import { RestaurantTileContainer } from "../restaurant-tile/restaurant-tile-container.jsx";

function RestaurantTabs({ restaurantsIds }) {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0],
  );

  const handleTabClick = (id) => {
    if (activeRestaurantId === id) return;
    setActiveRestaurantId(id);
  };

  return (
    <>
      <div className={styles["tabs-triggers"]}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            restaurantId={id}
            active={Boolean(activeRestaurantId === id)}
            onClick={() => handleTabClick(id)}
          />
        ))}
      </div>
      <RestaurantTileContainer restaurantId={activeRestaurantId} />
    </>
  );
}

export default RestaurantTabs;
