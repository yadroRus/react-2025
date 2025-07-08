import React from "react";

export const useCounter = (initialState) => {
  const [count, setCount] = React.useState(initialState);
  const [incrementDisabled, setIncrementDisabled] = React.useState(false);
  const [decrementDisabled, setDecrementDisabled] =
    React.useState(!initialState);

  const increment = (max) => {
    (max === undefined || count < max) && setCount(count + 1);
    setIncrementDisabled(count >= max - 1);
    setDecrementDisabled(false);
  };

  const decrement = (min) => {
    (min === undefined || count > min) && setCount(count - 1);
    setDecrementDisabled(count <= min + 1);
    setIncrementDisabled(false);
  };

  return [count, increment, decrement, incrementDisabled, decrementDisabled];
};
