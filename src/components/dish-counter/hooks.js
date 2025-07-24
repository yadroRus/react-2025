import {
  addDish,
  removeDish,
  selectCartDishById,
} from "../../data/entities/cart/slice.js";
import { useDispatch, useSelector } from "react-redux";

export const useCounter = ({ price = 0, min, max, dishId }) => {
  const dispatch = useDispatch();
  const cartDish = useSelector((state) =>
    selectCartDishById(state, dishId),
  ) || { count: 0, totalPrice: 0 };
  const { count, totalPrice } = cartDish;

  const increment = () => {
    if (max === undefined || count < Number(max)) {
      dispatch(addDish({ id: dishId, price }));
    }
  };

  const decrement = () => {
    if (min === undefined || count > Number(min)) {
      dispatch(removeDish({ id: dishId, price }));
    }
  };

  return { count, totalPrice, increment, decrement };
};
