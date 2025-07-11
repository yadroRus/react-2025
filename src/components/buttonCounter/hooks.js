import { useState } from "react";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState);

  const increment = (max) => {
    if (max === undefined || count < max) {
      setCount(count + 1);
    }
  };

  const decrement = (min) => {
    if (min === undefined || count > min) {
      setCount(count - 1);
    }
  };

  return { count, increment, decrement };
};
