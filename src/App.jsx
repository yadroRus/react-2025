import {restaurants} from '../materials/mock.js'
import RestaurantTile from "./components/restaurant-tile/restaurant-tile.jsx";

function App() {
    return (
        <>
            <h1>Рестораны</h1>
            {restaurants.map((restaurant) => <RestaurantTile key={restaurant.id} {...restaurant}/>)}
        </>
    )
}

export default App
