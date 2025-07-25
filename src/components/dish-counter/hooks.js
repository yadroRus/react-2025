import {
  addToCart,
  removeFromCart,
  selectCartDishById
} from "../../data/entities/cart/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

export const useCounter = ({ min, max, dishId, price = 0 }) => {
  const dispatch = useDispatch();
  const cartDish = useSelector((state) =>
    selectCartDishById(state, dishId)
  ) || { count: 0, totalPrice: 0 };
  const { count, totalPrice } = cartDish;

  const increment = useCallback(() => {
    if (max === undefined || count < Number(max)) {
      dispatch(addToCart({ id: dishId, price }));
    }
  }, [max, dishId, price, dispatch, count]);

  const decrement = useCallback(() => {
    if (min === undefined || count > Number(min)) {
      dispatch(removeFromCart({ id: dishId, price }));
    }
  }, [min, dishId, price, dispatch, count]);

  return { count, totalPrice, increment, decrement };
};
