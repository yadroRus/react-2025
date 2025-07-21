import { ScrollProgress } from "../components/scroll-progress/scroll-progress.jsx";
import Layout from "../components/layout/Layout.jsx";
import RestaurantTabs from "../components/restaurant-tabs/RestaurantTabs.jsx";
import { restaurants } from "../../materials/mock.js";
import { ThemeContextProvider } from "../components/theme-context/theme-context-provider.jsx";

export const RestaurantPage = () => {
  return (
    <ThemeContextProvider>
      <ScrollProgress />
      <Layout header={<h1>Рестораны</h1>}>
        <RestaurantTabs restaurants={restaurants} />
      </Layout>
    </ThemeContextProvider>
  );
};