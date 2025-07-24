import { useDispatch, useSelector } from "react-redux";
import { removeAllDishes } from "../../data/entities/cart/slice.js";
import { CartClearAllButton } from "./cart-clear-all-button.jsx";

export const CartClearAllButtonContainer = ({ onClick }) => {
  const dispatch = useDispatch();

  return (
    <CartClearAllButton
      onClick={() => {
        dispatch(removeAllDishes());
        onClick();
      }}
    />
  );
};
