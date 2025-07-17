import { useState } from "react";

export const useCounter = ({ value = 0, min, max }) => {
  const [count, setCount] = useState(Number(value));

  const increment = () => {
    if (max === undefined || count < Number(max)) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (min === undefined || count > Number(min)) {
      setCount(count - 1);
    }
  };

  return { count, setCount, increment, decrement };
};
