import { CartTotalPrice } from "./cart-total-price.jsx";
import { useSelector } from "react-redux";
import { selectCartTotalPrice } from "../../data/entities/cart/slice.js";

export const CartTotalPriceContainer = () => {
  const totalPrice = useSelector(selectCartTotalPrice);

  return <CartTotalPrice totalPrice={totalPrice} />;
};
