import { useCounter } from "./helpers.js";
import "./button-counter.css";
import { useImperativeHandle } from "react";

function ButtonCounter({ max, min, ref }) {
  const [count, increment, decrement, incrementDisabled, decrementDisabled] =
    useCounter(0);

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
