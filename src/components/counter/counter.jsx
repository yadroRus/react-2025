import "./counter.css";

export const Counter = ({
  prevDisabled,
  nextDisabled,
  onPrevClick,
  onNextClick,
  count,
  id,
}) => {
  return (
    <div className="btn-counter" id={id}>
      <button
        className="btn-counter__button"
        disabled={prevDisabled}
        onClick={onPrevClick}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="btn-counter__button"
        disabled={nextDisabled}
        onClick={onNextClick}
      >
        +
      </button>
    </div>
  );
};
