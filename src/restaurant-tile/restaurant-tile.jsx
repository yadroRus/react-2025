import './restaurant-tile.css';
import RestaurantDish from '../restaurant-dish/restaurant-dish.jsx';
import RestaurantComment from "../restaurant-comment/restaurant-comment.jsx";

function RestaurantTile({restaurant}) {

    const {name, menu, reviews} = restaurant;

    const menuList = menu?.map(({id, name, price, ingredients}) => <RestaurantDish key={id}
                                                                                   name={name}
                                                                                   price={price}
                                                                                   ingredients={ingredients}></RestaurantDish>)

    const reviewsList = reviews?.map(({id, user, text, rating}) => <RestaurantComment key={id}
                                                                                      author={user}
                                                                                      comment={text}
                                                                                      rating={rating}></RestaurantComment>)

    return (
        <div className='restaurant-tile'>
            <h2 className='restaurant-tile__name'>{name}</h2>
            <h3>Меню</h3>
            <ul>{menuList}</ul>
            <h3>Отзывы / Оценки</h3>
            <ul>{reviewsList}</ul>
        </div>
    )
}

export default RestaurantTile;