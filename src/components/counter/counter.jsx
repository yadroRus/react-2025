import "./counter.css";

export const Counter = ({
  decrement,
  increment,
  decrementDisabled,
  incrementDisabled,
  value,
  id,
}) => {
  return (
    <div className="btn-counter" id={id}>
      <button
        className="btn-counter__button"
        disabled={decrementDisabled}
        onClick={decrement}
      >
        -
      </button>
      <span>{value}</span>
      <button
        className="btn-counter__button"
        disabled={incrementDisabled}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
