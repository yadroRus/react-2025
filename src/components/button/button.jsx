import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({ onClick, className, text }) => {
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      {text}
    </button>
  );
};
