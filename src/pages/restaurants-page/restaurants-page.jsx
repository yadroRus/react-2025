import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../data/entities/restaurants/slice.js";
import styles from "../../components/restaurant-tabs/restaurant-tabs.module.css";
import { RestaurantTileContainer } from "../../components/restaurant-tile/restaurant-tile-container.jsx";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs.jsx";
import { getRestaurants } from "../../data/entities/restaurants/get-restaurants.js";
import { requestText, useRequest } from "../../data/hooks/use-request.js";
import { FULFILLED } from "../../data/entities/request/sliсe.js";

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const breadcrumbs = [
    {
      text: "Рестораны"
    }
  ];

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1>Рестораны</h1>
      {requestStatus !== FULFILLED ?
        requestText(requestStatus) :
        (<div className={styles["tabs-triggers"]}>
          {restaurantsIds.map((id) => (
            <RestaurantTileContainer key={id} restaurantId={id} />
          ))}
        </div>)
      }
    </>
  );
};