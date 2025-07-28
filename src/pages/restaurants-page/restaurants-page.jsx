import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../data/entities/restuarants/slice.js";
import styles from "../../components/restaurant-tabs/restaurant-tabs.module.css";
import { RestaurantTileContainer } from "../../components/restaurant-tile/restaurant-tile-container.jsx";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <>
      <h1>Рестораны</h1>
      <div className={styles["tabs-triggers"]}>
        {restaurantsIds.map((id) => (
          <RestaurantTileContainer
            key={id}
            restaurantId={id}
          />
        ))}
      </div>
    </>
  );
};