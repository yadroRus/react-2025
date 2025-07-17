import "./scroll-progress.css";
import { useProgress } from "./use-progress.js";

export const ScrollProgress = () => {
  const progress = useProgress();
  return (
    <div className="scroll-progress">
      <div
        className="scroll-progress-bar"
        style={{
          transform: `translateX(${progress}%)`,
        }}
      ></div>
    </div>
  );
};
