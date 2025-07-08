import './restaurant-menu-item.css';
import ButtonCounter from "../buttonCounter/ButtonCounter.jsx";
import React, {useRef} from "react";

function RestaurantMenuItem({name, price, ingredients}) {
    const [totalPrice, setTotalPrice] = React.useState(0);
    const counterRef = useRef(null);

    const updatePrice = () => {
        setTimeout(() => {
            // todo: Андрей, какой вариат предпочтительней через useImperativeHandle или чтение знаяения из DOM?
            setTotalPrice(counterRef.current.getCount() * price);
            // setTotalPrice(counterRef.current.textContent * price || price);
        })
    }

    return (<li className='restaurant-menu-item'>
        <div className='restaurant-menu-item__text'>
            <span>{name} <span style={{fontSize: '0.8em'}}>({price} руб.)</span></span>
            <div className='restaurant-menu-item__counter' onClick={updatePrice}>
                <span>{totalPrice} руб.</span>
                <ButtonCounter min="0" max="5" ref={counterRef}/>
            </div>
        </div>
        <div className='restaurant-menu-item__labels'>
            {ingredients.map((item, i) => <span key={i} className='restaurant-menu-item__label'>{item}</span>)}
        </div>
    </li>)
}

export default RestaurantMenuItem;