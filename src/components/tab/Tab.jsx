import styles from "./tabs.module.css";
import classNames from "classnames";

export const Tab = ({ name, active, onClick }) => {
  return (
    <div
      className={classNames(styles.tab, { [styles.active]: active })}
      onClick={onClick}
    >
      {name}
    </div>
  );
};
