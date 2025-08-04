import { Link } from "../link/link.jsx";
import styles from "../tab/tabs.module.css";
import { MENU_PAGE, RESTAURANT_PAGE } from "../../pages/links-paths.js";

export const RestaurantTabContainer = ({ restaurantId, restaurantName }) => {
  return (
    <Link
      to={`${RESTAURANT_PAGE}/${restaurantId}/${MENU_PAGE}`}
      className={styles.tab}
      activeClass={styles.active}
      activeUrlText={restaurantId}
    >
      {restaurantName}
    </Link>
  );
};
