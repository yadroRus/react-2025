import {
  addToCart,
  removeFromCart,
  selectCartDishById,
} from "../../data/entities/cart/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useRef } from "react";

export const useCounter = ({ min, max, dishId, price = 0 }) => {
  const dispatch = useDispatch();
  const cartDish = useSelector((state) =>
    selectCartDishById(state, dishId),
  ) || { count: 0, totalPrice: 0 };
  const countRef = useRef(null);
  const { count, totalPrice } = cartDish;

  countRef.current = count;

  const increment = useCallback(() => {
    if (max === undefined || countRef.current < Number(max)) {
      dispatch(addToCart({ id: dishId, price }));
    }
  }, [max, dishId, price, dispatch]);

  const decrement = useCallback(() => {
    if (min === undefined || countRef.current > Number(min)) {
      dispatch(removeFromCart({ id: dishId, price }));
    }
  }, [min, dishId, price, dispatch]);

  return { count, totalPrice, increment, decrement };
};
