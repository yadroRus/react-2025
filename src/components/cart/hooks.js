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
      // todo NOTE: выявленна ошибка, при клике по кнопке "убрать" блюдо, которая внутри корзины (.js-cart-area), происходит закрытие корзины, т.е. эта кнопка как-бы вне общего контейнера воспринимается, хотя она внути него, почему так - хз, в обычном JS такой проблемы бы не возникло
      /**
       * <div class='js-cart-area'>
       *   ... любой клик внтури не должен вызывать закрытие корзины, однако
       *   <CartDish>
       *      <Button onClick={onRemoveClick}/>
       *   </CartDish>
       *    ... при клике на button, происходит закрытие!!!
       *    пришлось в button onClick прокинуть e.stopPropagation();
       *
       *    @Андрей, есть мысли почему так происходит?
       *    почему для кнопки e.target.closest(".js-cart-area") возвращает null, хотя кнопка внутри .js-cart-area
       *    как это исправить, чтобы работало без e.stopPropagation()?
       *
       *    PS. все остальные элементы и кнпоки внутри корзины работают как ожидается, по кликам на них закрытия не происходит
       * </div>
       *
       * */
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
