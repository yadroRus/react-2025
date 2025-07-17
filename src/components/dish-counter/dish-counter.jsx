import { useCounter } from "./hooks.js";
import { useEffect } from "react";
import { Counter } from "../counter/counter.jsx";

export const DishCounter = ({ min = 0, max = 5, onCounterChange }) => {
  const { count, increment, decrement } = useCounter({ min, max });

  useEffect(() => {
    onCounterChange && onCounterChange(count);
  }, [count]);

  return (
    <Counter
      decrement={decrement}
      increment={increment}
      decrementDisabled={count <= min}
      incrementDisabled={count >= max}
      value={count}
    />
  );
};
