import styles from "./restaurant-tile.module.css";
import { Link } from "../link/link.jsx";

function RestaurantTile({ id, name, img }) {
  return (
    <Link to={`/res/${id}/menu`} className={styles.tile}>
      <img loading="lazy" src={img} alt={name} className={styles.img} />
      <h2 className={styles.header}>{name}</h2>
    </Link>
  );
}

export default RestaurantTile;
