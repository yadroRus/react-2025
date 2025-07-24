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
      // NOTE: выявленна ошибка, при клике по кнопке "убрать", которая внутри корзины (.js-cart-area), происходит закрытие корзины, т.е. эта кнопка как-бы вне общего контейнера воспринимается, хотя она внути него, почему так - хз, в обычном JS такой проблемы бы не возникло
      if (openedState.current && !e.target.closest(".js-cart-area")) {
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
