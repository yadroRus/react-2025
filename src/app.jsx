import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./pages/reset.css";
import "./pages/colors-light.css";
import "./pages/colors-dark.css";
import "./main.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "./data/redux/store.js";
import { ScrollProgress } from "./components/scroll-progress/scroll-progress.jsx";
import { ThemeContextProvider } from "./components/theme-context/theme-context-provider.jsx";
import { LoginContextProvider } from "./components/login-context/login-context-provider.jsx";
import Layout from "./layouts/main.jsx";
import { RestaurantPageLayoutContainer } from "./layouts/restaurant-page-layout-container.jsx";
import { RestaurantMenuPage } from "./pages/restaurant-menu-page/restaurant-menu-page.jsx";
import { RestaurantReviewPage } from "./pages/restaurant-reviews-page/restaurant-reviews-page.jsx";
import { RestaurantHomePageContainer } from "./pages/restaurant-home-page/restaurant-home-page-container.jsx";
import { DishPageContainer } from "./pages/dish-page/dish-page-container.jsx";
import { HomePage } from "./pages/home-page/home-page.jsx";
import { RestaurantsPage } from "./pages/restaurants-page/restaurants-page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <ScrollProgress />
        <LoginContextProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/res" element={<RestaurantPageLayoutContainer />}>
                  <Route path="" element={<RestaurantsPage />}></Route>
                  <Route path=":restaurantId" element={<RestaurantHomePageContainer />}>
                    <Route path="menu" element={<RestaurantMenuPage />} />
                    <Route path="reviews" element={<RestaurantReviewPage />} />
                  </Route>
                </Route>
                <Route path="/dish/:dishId" element={<DishPageContainer />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LoginContextProvider>
      </ThemeContextProvider>
    </Provider>
  </StrictMode>
);
