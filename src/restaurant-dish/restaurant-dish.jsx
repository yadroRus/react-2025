import './restaurant-dish.css';

function RestaurantDish({name, price, ingredients}) {
    return (
        <li className='restaurant-dish'>
            <div className='restaurant-dish__text'>
                <span>{name}</span>
                <span>{price} руб.</span>
            </div>
            <div className='restaurant-dish__labels'>
                {ingredients.map((item, i) => <span key={i} className='restaurant-dish__label'>{item}</span>)}
            </div>
        </li>
    )
}

export default RestaurantDish;