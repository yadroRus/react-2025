import { selectRestaurantById } from "../../data/entities/restaurants/slice.js";
import { useSelector } from "react-redux";
import { Link } from "../link/link.jsx";
import styles from "../tab/tabs.module.css";
import { MENU_PAGE, RESTAURANT_PAGE } from "../../pages/links-paths.js";

export const RestaurantTabContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return (
    <Link
      to={`${RESTAURANT_PAGE}/${restaurant.id}/${MENU_PAGE}`}
      className={styles.tab}
      activeClass={styles.active}
      activeUrlText={restaurant.id}
    >
      {restaurant.name}
    </Link>
  );
};
