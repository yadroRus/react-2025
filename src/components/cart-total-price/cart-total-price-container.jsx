import { CartTotalPrice } from "./cart-total-price.jsx";
import { useSelector } from "react-redux";
import { selectCartDishes } from "../../data/entities/cart/slice.js";

export const CartTotalPriceContainer = () => {
  const dishes = useSelector(selectCartDishes);

  let totalPrice = 0;
  Object.values(dishes).forEach((dish) => (totalPrice += dish.totalPrice));

  return <CartTotalPrice totalPrice={totalPrice} />;
};
