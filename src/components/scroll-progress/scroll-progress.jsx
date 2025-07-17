import styles from "./scroll-progress.module.css";
import { useProgress } from "./use-progress.js";

export const ScrollProgress = () => {
  const progress = useProgress();
  return (
    <div className={styles.container}>
      <div
        className={styles.bar}
        style={{
          transform: `translateX(${progress}%)`,
        }}
      ></div>
    </div>
  );
};
