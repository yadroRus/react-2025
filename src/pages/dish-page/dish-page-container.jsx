import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectDishById } from "../../data/entities/dishes/slice.js";
import { DishPage } from "./dish-page.jsx";
import { useRequest } from "../../data/hooks/use-request.js";
import { getDish } from "../../data/entities/dishes/get-dish.js";

export const DishPageContainer = () => {
  const { dishId } = useParams();
  const requestStatus = useRequest(getDish, dishId);
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish) {
    return null;
  }

  return <DishPage
    dishId={dishId}
    name={dish?.name}
    price={dish?.price}
    ingredients={dish?.ingredients}
    requestStatus={requestStatus}>
  </DishPage>;
};