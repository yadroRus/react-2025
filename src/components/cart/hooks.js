import { useEffect, useState } from "react";

export const useCart = () => {
  const [opened, setOpen] = useState(false);

  const toggleCart = (value) => {
    setOpen(value);
  };

  useEffect(() => {
    const onBodyClick = (e) => {
      setOpen((current) => {
        if (
          current &&
          e.target.isConnected &&
          !e.target.closest(".js-cart-area")
        ) {
          return false;
        }
        return current;
      });
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return { opened, toggleCart };
};
