import { Outlet, useParams } from "react-router";
import styles from "../components/restaurant-tabs/restaurant-tabs.module.css";
import { RestaurantTabContainer } from "../components/restaurant-tab-container/restaurant-tab-container.jsx";
import { Breadcrumbs } from "../components/breadcrumbs/breadcrumbs.jsx";
import { RESTAURANT_PAGE } from "../pages/links-paths.js";

export const RestaurantPageLayout = ({ restaurantsIds, restaurant }) => {
  const breadcrumbs = [
    {
      text: "Рестораны",
      path: RESTAURANT_PAGE
    },
    {
      text: restaurant.name
    }
  ];
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>Описание</h1>
      <div className={styles["tabs-triggers"]}>
        {restaurantsIds.map((id) => (
          <RestaurantTabContainer
            key={id}
            restaurantId={id}
          />
        ))}
      </div>
      <Outlet context={{ restaurant }} />
    </>
  );
};