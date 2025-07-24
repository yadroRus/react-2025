import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ onClick, className, text, isDisabled, style }) => {
  return (
    <button
      className={classNames(styles.button, className)}
      onClick={onClick}
      style={style}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
