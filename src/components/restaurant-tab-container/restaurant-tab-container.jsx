import { selectRestaurantById } from "../../data/entities/restuarants/slice.js";
import { useSelector } from "react-redux";
import { Link } from "../link/link.jsx";
import styles from "../tab/tabs.module.css";

export const RestaurantTabContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <Link
      to={`/res/${restaurant.id}/menu`}
      className={styles.tab}
      activeClass={styles.active}
      activeUrlText={restaurant.id}
    >
      {restaurant.name}
    </Link>
  );
};
