import './restaurant-tile.css';
import RestaurantDish from '../restaurant-dish/restaurant-dish.jsx';
import RestaurantComment from "../restaurant-comment/restaurant-comment.jsx";

function menuMarkup(menu) {
    return menu ? (
        <>
            <h3>Меню</h3>
            <ul>
                {menu?.map(({id, name, price, ingredients}) => <RestaurantDish key={id}
                                                                               name={name}
                                                                               price={price}
                                                                               ingredients={ingredients}></RestaurantDish>)
                }
            </ul>
        </>) : null;

}

function reviewsMarkup(reviews) {
    return reviews ? (
        <>
            <h3>Отзывы / Оценки</h3>
            <ul>
                {reviews?.map(({id, user, text, rating}) => <RestaurantComment key={id}
                                                                               author={user}
                                                                               comment={text}
                                                                               rating={rating}></RestaurantComment>)
                }
            </ul>
        </>) : null;

}

function RestaurantTile({name, menu, reviews}) {
    return (
        <div className='restaurant-tile'>
            <h2 className='restaurant-tile__name'>{name}</h2>
            {menuMarkup(menu)}
            {reviewsMarkup(reviews)}
        </div>
    )
}

export default RestaurantTile;