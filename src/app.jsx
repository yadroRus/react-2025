import { StrictMode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./data/redux/store.js";
import { ScrollProgress } from "./components/scroll-progress/scroll-progress.jsx";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider.jsx";
import { LoginContextProvider } from "./components/login-context/login-context-provider.jsx";
import Layout from "./layouts/main.jsx";
import { RestaurantPageLayoutContainer } from "./layouts/restaurant-page-layout-container.jsx";
import { RestaurantMenuPage } from "./pages/restaurant-menu-page/restaurant-menu-page.jsx";
import { RestaurantHomePageContainer } from "./pages/restaurant-home-page/restaurant-home-page-container.jsx";
import { DishPageContainer } from "./pages/dish-page/dish-page-container.jsx";
import { HomePage } from "./pages/home-page/home-page.jsx";
import { RestaurantsPage } from "./pages/restaurants-page/restaurants-page.jsx";
import { DISH_PAGE, MENU_PAGE, RESTAURANT_PAGE, REVIEWS_PAGE } from "./pages/links-paths.js";
import { RestaurantReviewsPageContainer } from "./pages/restaurant-reviews-page/restaurant-reviews-page-container.jsx";

export const App = ()=>{
  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeContextProvider>
          <ScrollProgress />
          <LoginContextProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path={RESTAURANT_PAGE} element={<RestaurantsPage />}/>
                  <Route path={RESTAURANT_PAGE} element={<RestaurantPageLayoutContainer />}>
                    <Route path=":restaurantId" element={<RestaurantHomePageContainer />}>
                      <Route path={MENU_PAGE} element={<RestaurantMenuPage />} />
                      <Route path={REVIEWS_PAGE} element={<RestaurantReviewsPageContainer />} />
                    </Route>
                  </Route>
                  <Route path={`${DISH_PAGE}/:dishId`} element={<DishPageContainer />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </LoginContextProvider>
        </ThemeContextProvider>
      </Provider>
    </StrictMode>
  )
}