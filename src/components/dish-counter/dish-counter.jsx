import { useCounter } from "./hooks.js";
import { useEffect } from "react";
import { Counter } from "../counter/counter.jsx";
import "./dish-counter.css";

export const DishCounter = ({ min = 0, max = 5, onCounterChange }) => {
  const { count, increment, decrement } = useCounter({ min, max });

  useEffect(() => {
    onCounterChange && onCounterChange(count);
  }, [count]);

  return (
    <Counter
      onPrevClick={decrement}
      onNextClick={increment}
      prevDisabled={count <= min}
      nextDisabled={count >= max}
      count={count}
    />
  );
};
