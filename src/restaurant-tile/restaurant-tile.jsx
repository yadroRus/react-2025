import './restaurant-tile.css';
import RestaurantComments from "../restaurant-comments/restaurant-comments.jsx";
import RestaurantMenu from "../restaurant-menu/restaurant-menu.jsx";

function RestaurantTile({name, menu, reviews}) {
    return (
        <div className='restaurant-tile'>
            <h2 className='restaurant-tile__name'>{name}</h2>
            <RestaurantMenu menu={menu}/>
            <RestaurantComments comments={reviews}/>
        </div>
    )
}

export default RestaurantTile;