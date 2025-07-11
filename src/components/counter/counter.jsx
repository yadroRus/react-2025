import "./counter.css";

export const Counter = ({
  prevDisabled,
  nextDisabled,
  onPrevClick,
  onNextClick,
  count,
}) => {
  return (
    <div className="btn-counter">
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
