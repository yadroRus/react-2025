import classNames from "classnames";
import styles from "./counter.module.css";

export const Counter = ({
  decrement,
  increment,
  decrementDisabled,
  incrementDisabled,
  value,
  id,
}) => {
  return (
    <div className={classNames(styles.counter)} id={id}>
      <button
        className={classNames(styles.button, {
          [styles.buttonDisabled]: decrementDisabled,
        })}
        onClick={decrement}
      >
        -
      </button>
      <span>{value}</span>
      <button
        className={classNames(styles.button, {
          [styles.buttonDisabled]: incrementDisabled,
        })}
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
