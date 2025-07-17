import { ScrollProgress } from "../components/scroll-progress/scroll-progress.jsx";
import Layout from "../components/layout/Layout.jsx";
import RestaurantTabs from "../components/restaurant-tabs/RestaurantTabs.jsx";
import { restaurants } from "../../materials/mock.js";
import "./restaurant-page.css";

export const RestaurantPage = () => {
  return (
    <>
      <ScrollProgress />
      <Layout header={<h1>Рестораны</h1>}>
        <RestaurantTabs restaurants={restaurants} />
      </Layout>
    </>
  );
};