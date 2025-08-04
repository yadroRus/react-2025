import { Outlet, useParams } from "react-router";
import styles from "../components/restaurant-tabs/restaurant-tabs.module.css";
import { RestaurantTabContainer } from "../components/restaurant-tab-container/restaurant-tab-container.jsx";
import { Breadcrumbs } from "../components/breadcrumbs/breadcrumbs.jsx";
import { RESTAURANT_PAGE } from "../pages/links-paths.js";
import { FULFILLED } from "../data/entities/request/sliсe.js";
import { requestText } from "../data/hooks/use-request.js";

export const RestaurantPageLayout = ({
                                       restaurants,
                                      requestStatus
                                     }) => {
  const { restaurantId } = useParams();

  const currentRestaurant = restaurants?.find((restaurant) => restaurant.id === restaurantId);

  const breadcrumbs = [
    {
      text: "Рестораны",
      path: RESTAURANT_PAGE
    },
    {
      text: currentRestaurant?.name || "..."
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
              {restaurants?.map((restaurant) => (
                <RestaurantTabContainer
                  key={restaurant.id}
                  restaurantId={restaurant.id}
                  restaurantName={restaurant.name}
                />
              ))}
            </div>
            <Outlet context={{ currentRestaurant }} />
          </>
        )}
    </>
  );
};