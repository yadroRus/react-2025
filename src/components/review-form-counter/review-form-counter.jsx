import { useCounter } from "../dish-counter/hooks.js";
import { useImperativeHandle } from "react";
import { Counter } from "../counter/counter.jsx";

export const ReviewFormCounter = ({ min = 0, max = 5, ref }) => {
  const { count, setCount, increment, decrement } = useCounter({ min, max });

  // works like an outer api of a component
  useImperativeHandle(
    ref,
    () => ({
      setCount: (value) => setCount(value),
    }),
    [count],
  );

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
