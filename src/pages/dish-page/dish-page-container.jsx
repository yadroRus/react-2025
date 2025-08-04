import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectDishById } from "../../data/entities/dishes/slice.js";
import { DishPage } from "./dish-page.jsx";
import { useRequest } from "../../data/hooks/use-request.js";
import { getDish } from "../../data/entities/dishes/get-dish.js";
import { useGetDishByIdQuery } from "../../data/services/api/api.js";

export const DishPageContainer = () => {
  const { dishId } = useParams();
  // const requestStatus = useRequest(getDish, dishId);
  // const dish = useSelector((state) => selectDishById(state, dishId));

  const { data: dish, status: requestStatus } = useGetDishByIdQuery(dishId);

  return <DishPage
    dishId={dishId}
    name={dish?.name}
    price={dish?.price}
    ingredients={dish?.ingredients}
    requestStatus={requestStatus}>
  </DishPage>;
};