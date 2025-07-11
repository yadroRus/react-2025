import "./scroll-progress.css";
import { useEffect, useRef } from "react";

function getVerticalScrollPercentage(node) {
  const parent = node.parentNode;
  return (
    ((node.scrollTop || parent.scrollTop) /
      (parent.scrollHeight - parent.clientHeight)) *
    100
  );
}

export const ScrollProgress = () => {
  const refProgressBar = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      refProgressBar.current.style.transform = `translateX(${getVerticalScrollPercentage(document.body) - 100}%)`;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress">
      <div ref={refProgressBar} className="scroll-progress-bar"></div>
    </div>
  );
};
