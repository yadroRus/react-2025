import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../data/entities/cart/slice.js";
import { CartClearAllButton } from "./cart-clear-all-button.jsx";

export const CartClearAllButtonContainer = ({ onClick }) => {
  const dispatch = useDispatch();

  return (
    <CartClearAllButton
      onClick={() => {
        dispatch(clearCart());
        onClick();
        // todo Андрей, вопрос
        /**
         * <parent onClick={parentOnclick}>
         *    <child onClick={childOnclick}></child>
         * </parent>
         *
         * при текущей архитектуре почему вызовется только childOnclick?
         * для того чтобы вызвался parentOnclick, его приходится пробрасывать в child
         * и вызывать руками, что давольно не логично если вопсриниать onClick как
         * node.addEventListener('click', ...)
         *
         * */
      }}
    />
  );
};
