import { ScrollProgress } from "../components/scroll-progress/scroll-progress.jsx";
import Layout from "../components/layout/Layout.jsx";
import RestaurantTabs from "../components/restaurant-tabs/RestaurantTabs.jsx";
import { ThemeContextProvider } from "../components/theme-context/theme-context-provider.jsx";
import { LoginContextProvider } from "../components/login-context/login-context-provider.jsx";

export const RestaurantPage = ({restaurantsIds}) => {
  return (
    <ThemeContextProvider>
      <ScrollProgress />
      <LoginContextProvider>
        <Layout header={<h1>Рестораны</h1>}>
          <RestaurantTabs restaurantsIds={restaurantsIds} />
        </Layout>
      </LoginContextProvider>
    </ThemeContextProvider>
  );
};