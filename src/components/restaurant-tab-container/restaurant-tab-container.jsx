import { selectRestaurantById } from "../../data/entities/restuarants/slice.js";
import { useSelector } from "react-redux";
import { Tab } from "../tab/Tab.jsx";

export const RestaurantTabContainer = ({ restaurantId, active, onClick }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId),
  );
  return <Tab name={restaurant.name} active={active} onClick={onClick} />;
};
