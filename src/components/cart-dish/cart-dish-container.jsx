import { selectDishById } from "../../data/entities/dishes/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { CartDish } from "./cart-dish.jsx";
import { removeDishCompletely } from "../../data/entities/cart/slice.js";

export const CartDishContainer = ({ dishId, count }) => {
  const dispatch = useDispatch();
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <CartDish
      dishId={dishId}
      name={dish.name}
      price={dish.price}
      onRemoveClick={() => dispatch(removeDishCompletely(dishId))}
    />
  );
};
