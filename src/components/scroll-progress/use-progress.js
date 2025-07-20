import { useEffect, useState } from "react";

function getVerticalScrollPercentage(node = document.body) {
  const parent = node.parentNode;
  return (
    ((node.scrollTop || parent.scrollTop) /
      (parent.scrollHeight - parent.clientHeight)) *
      100 -
    100
  );
}

export const useProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setProgress(getVerticalScrollPercentage());
    };
    onScroll();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
};
