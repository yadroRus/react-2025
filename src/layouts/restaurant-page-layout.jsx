import { Outlet, useParams } from "react-router";
import styles from "../components/restaurant-tabs/restaurant-tabs.module.css";
import { RestaurantTabContainer } from "../components/restaurant-tab-container/restaurant-tab-container.jsx";

export const RestaurantPageLayout = ({ restaurantsIds }) => {
  const restaurantId = useParams();
  return (
    <>
      <h1>Рестораны</h1>
      <div className={styles["tabs-triggers"]}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            restaurantId={id}
          />
        ))}
      </div>
      <Outlet context={restaurantId} />
    </>
  );
};