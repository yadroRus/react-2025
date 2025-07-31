import styles from "../../components/restaurant-tabs/restaurant-tabs.module.css";
import { RestaurantTileContainer } from "../../components/restaurant-tile/restaurant-tile-container.jsx";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs.jsx";
import { requestText } from "../../data/hooks/use-request.js";
import { FULFILLED } from "../../data/entities/request/sliсe.js";

export const RestaurantsPage = ({ requestStatus, restaurantsIds }) => {
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