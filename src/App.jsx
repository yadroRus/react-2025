import {restaurants} from '../materials/mock.js'
import Layout from "./components/layout/Layout.jsx";
import RestaurantTabs from "./components/restaurant-tabs/RestaurantTabs.jsx";

function App() {
    return (
        <Layout header={<h1>Рестораны</h1>}>
            <RestaurantTabs restaurants={restaurants}/>
        </Layout>
    )
}

export default App
