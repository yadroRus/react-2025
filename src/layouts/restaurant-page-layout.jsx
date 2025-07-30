import { Outlet } from "react-router";
import styles from "../components/restaurant-tabs/restaurant-tabs.module.css";
import { RestaurantTabContainer } from "../components/restaurant-tab-container/restaurant-tab-container.jsx";
import { Breadcrumbs } from "../components/breadcrumbs/breadcrumbs.jsx";
import { RESTAURANT_PAGE } from "../pages/links-paths.js";
import { FULFILLED } from "../data/entities/request/sliсe.js";
import { requestText } from "../data/hooks/use-request.js";

export const RestaurantPageLayout = ({ restaurantsIds, restaurant, requestStatus }) => {
  const breadcrumbs = [
    {
      text: "Рестораны",
      path: RESTAURANT_PAGE
    },
    {
      text: restaurant?.name || "..."
    }
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>Описание</h1>
      {requestStatus !== FULFILLED ?
        requestText(requestStatus) :
        (
          <>
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
        )}
    </>
  );
};