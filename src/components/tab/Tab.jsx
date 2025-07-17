import styles from "./tabs.module.css";
import classNames from "classnames";
import { memo } from "react";

export const Tab = memo(({ name, active, onClick }) => {
  return (
    <div
      className={classNames(styles.tab, { [styles.active]: active })}
      onClick={onClick}
    >
      {name}
    </div>
  );
});
