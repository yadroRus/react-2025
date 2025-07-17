import "./restaurant-menu-item.css";
import { DishCounter } from "../dish-counter/dish-counter.jsx";
import { useState } from "react";

function RestaurantMenuItem({ name, price, ingredients }) {
  const [totalPrice, setTotalPrice] = useState(0);

  const onCounterChange = (count) => setTotalPrice(count * price);

  return (
    <li className="restaurant-menu-item">
      <div className="restaurant-menu-item__text">
        <span>
          {name} <span style={{ fontSize: "0.8em" }}>({price} руб.)</span>
        </span>
        <div className="restaurant-menu-item__counter">
          <span>{totalPrice} руб.</span>
          <DishCounter onCounterChange={onCounterChange} />
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
