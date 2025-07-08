import './restaurant-menu-item.css';

function RestaurantMenuItem({name, price, ingredients}) {
    return (
        <li className='restaurant-menu-item'>
            <div className='restaurant-menu-item__text'>
                <span>{name}</span>
                <span>{price} руб.</span>
            </div>
            <div className='restaurant-menu-item__labels'>
                {ingredients.map((item, i) => <span key={i} className='restaurant-menu-item__label'>{item}</span>)}
            </div>
        </li>
    )
}

export default RestaurantMenuItem;