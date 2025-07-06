import './restaurant-tile.css';
import RestaurantDish from '../restaurant-dish/restaurant-dish.jsx';
import RestaurantComment from "../restaurant-comment/restaurant-comment.jsx";

function RestaurantTile({info}) {

    const menuList = info.menu?.map((item) => <RestaurantDish key={item.id}
                                                              name={item.name}
                                                              price={item.price}
                                                              ingredients={item.ingredients}></RestaurantDish>)

    const reviewsList = info.reviews?.map((item) => <RestaurantComment key={item.id}
                                                                       author={item.user}
                                                                       comment={item.text}
                                                                       rating={item.rating}></RestaurantComment>)

    return (
        <div className='restaurant-tile'>
            <h2 className='restaurant-tile__name'>{info.name}</h2>
            <h3>Меню</h3>
            <ul>{menuList}</ul>
            <h3>Отзывы / Оценки</h3>
            <ul>{reviewsList}</ul>
        </div>
    )
}

export default RestaurantTile;