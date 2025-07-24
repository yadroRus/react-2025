import { useEffect, useRef, useState } from "react";

export const useCart = () => {
  const [opened, setOpen] = useState(false);
  const openedState = useRef(null);

  const toggleCart = (value) => {
    openedState.current = value;
    setOpen(value);
  };

  useEffect(() => {
    const onBodyClick = (e) => {
      if (
        openedState.current &&
        e.target.isConnected &&
        !e.target.closest(".js-cart-area")
      ) {
        toggleCart(false);
      }
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return { opened, toggleCart };
};
