import { useLoginContext } from "../login-context/hooks.js";
import { selectCartDishes } from "../../data/entities/cart/slice.js";
import { useSelector } from "react-redux";
import { CartItemContainer } from "../cart-item/cart-item-container.jsx";
import { CartClearAllButtonContainer } from "../cart-clear-all-button/cart-clear-all-button-container.jsx";
import { CartTotalPriceContainer } from "../cart-total-price/cart-total-price-container.jsx";
import styles from "./cart.module.css";
import { Button } from "../button/button.jsx";
import classNames from "classnames";
import { useCart } from "./hooks.js";

export const Cart = () => {
  const { user } = useLoginContext();
  const { opened, toggleCart } = useCart();
  const cartDishes = useSelector(selectCartDishes);
  const cartNum = Object.keys(cartDishes).length;
  const isEmpty = !user || !cartNum;

  return (
    <>
      <Button
        className={classNames("js-cart-area", styles.carButton, {
          [styles.opened]: opened,
          [styles.disabled]: isEmpty,
          [styles.trigger]: !isEmpty,
        })}
        isDisabled={isEmpty}
        onClick={() => toggleCart(!opened)}
      >
        <span className={styles.icon}>🍽️</span>
        {user && cartNum ? (
          <span className={styles.iconCount}>{cartNum}</span>
        ) : null}
      </Button>
      {opened && !isEmpty ? (
        <div className={classNames("js-cart-area", styles.cart)}>
          <div className={styles.header}>Выбранно {cartNum} блюд:</div>
          <ul>
            {Object.keys(cartDishes).map((id) => (
              <CartItemContainer key={id} dishId={id} />
            ))}
          </ul>
          <CartTotalPriceContainer />
          <CartClearAllButtonContainer onClick={() => toggleCart(false)} />
          <Button text="Купить" style={{ float: "right" }} />
        </div>
      ) : null}
    </>
  );
};
