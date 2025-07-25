import { selectDishById } from "../../data/entities/dishes/slice.js";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "./cart-item.jsx";
import { removePosition } from "../../data/entities/cart/slice.js";

export const CartItemContainer = ({ dishId }) => {
  const dispatch = useDispatch();
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <CartItem
      dishId={dishId}
      name={dish.name}
      price={dish.price}
      onRemoveClick={() => dispatch(removePosition(dishId))}
    />
  );
};
