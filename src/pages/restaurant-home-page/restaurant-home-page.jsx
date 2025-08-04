import styles from "./restaurant-home-page.module.css";
import { Link } from "../../components/link/link.jsx";
import { Outlet, useOutletContext } from "react-router";
import buttonStyles from "../../components/button/button.module.css";
import { MENU_PAGE, REVIEWS_PAGE } from "../links-paths.js";
import { FULFILLED } from "../../data/entities/request/sliсe.js";
import { requestText } from "../../data/hooks/use-request.js";

export const RestaurantHomePage = ({ restaurant, restaurantRequestStatus }) => {

  const {currentRestaurant} = useOutletContext();

  return (
    <div className={styles.container}>
      <img src={currentRestaurant?.img} alt="name" loading="lazy" className={styles.img} />
      <h2 className={styles.name}>{currentRestaurant?.name}</h2>
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