import styles from "./stars-rating.module.css";
import { memo } from "react";

export const StarsRating = memo(({ value = 0 }) => {
  let starsHTML = "";
  for (let i = 0; i < Number(value); i++) {
    starsHTML += "★ ";
  }

  return <div className={styles.stars}>{starsHTML}</div>;
});
