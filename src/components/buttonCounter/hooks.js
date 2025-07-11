import { useState } from "react";

export const useCounter = ({ min, max }) => {
  const [count, setCount] = useState(min);

  const increment = () => {
    if (max === undefined || count < max) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (min === undefined || count > min) {
      setCount(count - 1);
    }
  };

  return { count, increment, decrement };
};
