import styles from "../../components/restaurant-tabs/restaurant-tabs.module.css";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs.jsx";
import { requestText } from "../../data/hooks/use-request.js";
import { FULFILLED } from "../../data/entities/request/sliсe.js";
import RestaurantTile from "../../components/restaurant-tile/restaurant-tile.jsx";

export const RestaurantsPage = ({ requestStatus, restaurants }) => {
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
          {restaurants.map((restaurant) => (
            <RestaurantTile
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              img={restaurant.img}
            />
          ))}
        </div>)
      }
    </>
  );
};