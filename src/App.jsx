import {restaurants} from '../materials/mock.js'
import RestaurantTile from "./components/restaurant-tile/restaurant-tile.jsx";
import Layout from "./components/layout/Layout.jsx";
import RestaurantTabs from "./components/restaurant-tabs/RestaurantTabs.jsx";

function App() {
    return (
        <Layout header={<h1>Рестораны</h1>}>
            <RestaurantTabs restaurants={restaurants}></RestaurantTabs>
        </Layout>
    )
}

export default App
