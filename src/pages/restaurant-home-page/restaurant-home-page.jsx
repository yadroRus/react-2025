import styles from "./restaurant-home-page.module.css";
import { Link } from "../../components/link/link.jsx";
import { Outlet } from "react-router";
import buttonStyles from "../../components/button/button.module.css";
import { MENU_PAGE, REVIEWS_PAGE } from "../links-paths.js";
import { FULFILLED } from "../../data/entities/request/sliсe.js";
import { requestText } from "../../data/hooks/use-request.js";

export const RestaurantHomePage = ({ restaurant, restaurantRequestStatus }) => {
  const { name, img } = restaurant;
  return (
    <div className={styles.container}>
      <img src={img} alt="name" loading="lazy" className={styles.img} />
      <h2 className={styles.name}>{name}</h2>
      {restaurantRequestStatus !== FULFILLED ?
        requestText(restaurantRequestStatus) :
        (
          <>
            <Link to={MENU_PAGE} className={buttonStyles.button} activeClass={buttonStyles.active}>Меню</Link>
            <Link to={REVIEWS_PAGE} className={buttonStyles.button} activeClass={buttonStyles.active}>Отзывы</Link>
            <Outlet context={{ restaurant }} />
          </>
        )
      }
    </div>
  );
};