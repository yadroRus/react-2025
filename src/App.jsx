import {restaurants} from '../materials/mock.js'
import RestaurantTile from "./restaurant-tile/restaurant-tile.jsx";

function App() {
    return (
        <>
            <h1>Рестораны</h1>
            {restaurants.map((info) => <RestaurantTile key={info.id} info={{...info}}/>)}
        </>
    )
}

export default App
