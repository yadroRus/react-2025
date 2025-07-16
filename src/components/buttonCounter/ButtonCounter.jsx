import { useCounter } from "./hooks.js";
import "./button-counter.css";
import { useImperativeHandle, useEffect } from "react";

function ButtonCounter({ min = 0, max = 5, ref, onCounterChange }) {
  const { count, increment, decrement } = useCounter({
    min: Number(min),
    max: Number(max),
  });

  const incrementDisabled = count >= max;
  const decrementDisabled = count <= min;

  useEffect(() => {
    onCounterChange(count);
  }, [count]);

  // works like an outer api of a component
  useImperativeHandle(
    ref,
    () => ({
      getCount: () => count,
    }),
    [count],
  );

  return (
    <div className="btn-counter">
      <button
        className="btn-counter__button"
        disabled={decrementDisabled}
        onClick={() => decrement(min)}
      >
        -
      </button>
      <span ref={ref}>{count}</span>
      <button
        className="btn-counter__button"
        disabled={incrementDisabled}
        onClick={() => increment(max)}
      >
        +
      </button>
    </div>
  );
}

export default ButtonCounter;
