import './restaurant-menu-item.css';
import ButtonCounter from "../buttonCounter/ButtonCounter.jsx";

function RestaurantMenuItem({name, price, ingredients}) {
    return (<li className='restaurant-menu-item'>
            <div className='restaurant-menu-item__text'>
                <span>{name}</span>
                <div className='restaurant-menu-item__counter'>
                    <span>{price} руб.</span>
                    <ButtonCounter min="0" max="5"/>
                </div>
            </div>
            <div className='restaurant-menu-item__labels'>
                {ingredients.map((item, i) => <span key={i} className='restaurant-menu-item__label'>{item}</span>)}
            </div>
        </li>)
}

export default RestaurantMenuItem;