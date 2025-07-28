import styles from "./restaurant-home-page.module.css";
import { Link } from "../../components/link/link.jsx";
import { Outlet } from "react-router";
import buttonStyles from "../../components/button/button.module.css";
import { MENU_PAGE, REVIEWS_PAGE } from "../links-paths.js";

export const RestaurantHomePage = ({ restaurant }) => {
  const { name } = restaurant;
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <Link to={MENU_PAGE} className={buttonStyles.button} activeClass={buttonStyles.active}>Меню</Link>
      <Link to={REVIEWS_PAGE} className={buttonStyles.button} activeClass={buttonStyles.active}>Отзывы</Link>
      <Outlet context={{ restaurant }} />
    </div>
  );
};