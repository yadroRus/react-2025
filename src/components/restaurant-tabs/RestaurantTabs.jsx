import RestaurantTile from "../restaurant-tile/restaurant-tile.jsx";
import React from "react";
import './restaurant-tabs.css';

function RestaurantTabs({restaurants}) {

    const [activeRestaurant, setActiveRestaurant] = React.useState(restaurants[0]);

    const handleTabClick = (e, id) => {
        const nextRestaurant = restaurants.find((restaurant) => restaurant.id === id);
        nextRestaurant && setActiveRestaurant(nextRestaurant);
    };

    return (
        <>
            <div className="tabs-triggers">
                {restaurants.map((restaurant) => {
                    return <div key={restaurant.id}
                                className='tabs-trigger'
                                active={String(activeRestaurant.id === restaurant.id)}
                                onClick={(e) => handleTabClick(e, restaurant.id)}>{restaurant.name}</div>
                })}
            </div>
            <div className="tabs-body">
                <RestaurantTile {...activeRestaurant}/>
            </div>
        </>
    )
}

export default RestaurantTabs;