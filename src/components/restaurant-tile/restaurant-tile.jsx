import styles from "./restaurant-tile.module.css";
import { Link } from "../link/link.jsx";
import { MENU_PAGE, RESTAURANT_PAGE } from "../../pages/links-paths.js";

function RestaurantTile({ id, name, img }) {
  return (
    <Link to={`${RESTAURANT_PAGE}/${id}/${MENU_PAGE}`} className={styles.tile}>
      <img loading="lazy" src={img} alt={name} className={styles.img} />
      <h2 className={styles.header}>{name}</h2>
    </Link>
  );
}

export default RestaurantTile;
