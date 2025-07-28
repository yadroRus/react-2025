import styles from "./restaurant-home-page.module.css";
import { Link } from "../../components/link/link.jsx";
import { Outlet } from "react-router";
import buttonStyles from "../../components/button/button.module.css";

export const RestaurantHomePage = ({ name, menuIds, reviewsIds }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <Link to={"menu"} className={buttonStyles.button} activeClass={buttonStyles.active}>Меню</Link>
      <Link to={"reviews"} className={buttonStyles.button} activeClass={buttonStyles.active}>Отзывы</Link>
      <Outlet context={{ name, menuIds, reviewsIds }} />
    </div>
  );
};