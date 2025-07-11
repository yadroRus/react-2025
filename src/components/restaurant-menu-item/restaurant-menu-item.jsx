import "./restaurant-menu-item.css";
import ButtonCounter from "../buttonCounter/ButtonCounter.jsx";
import { useRef, useState } from "react";

function RestaurantMenuItem({ name, price, ingredients }) {
  const [totalPrice, setTotalPrice] = useState(0);
  // const counterRef = useRef(null);

  const onCounterChange = (count) => {
    setTotalPrice(count * price);
    // setTotalPrice(counterRef.current.textContent * price || price);
  };

  return (
    <li className="restaurant-menu-item">
      <div className="restaurant-menu-item__text">
        <span>
          {name} <span style={{ fontSize: "0.8em" }}>({price} руб.)</span>
        </span>
        <div className="restaurant-menu-item__counter">
          <span>{totalPrice} руб.</span>
          <ButtonCounter
            min="0"
            max="5"
            // ref={counterRef}
            onCounterChange={onCounterChange}
          />
        </div>
      </div>
      <div className="restaurant-menu-item__labels">
        {ingredients.map((item, i) => (
          <span key={i} className="restaurant-menu-item__label">
            {item}
          </span>
        ))}
      </div>
    </li>
  );
}

export default RestaurantMenuItem;
