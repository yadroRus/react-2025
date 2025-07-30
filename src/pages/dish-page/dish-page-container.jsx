import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectDishById } from "../../data/entities/dishes/slice.js";
import { DishPage } from "./dish-page.jsx";

export const DishPageContainer = () => {
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return <DishPage
    dishId={dishId}
    name={dish.name}
    price={dish.price}
    ingredients={dish.ingredients}>
  </DishPage>;
};