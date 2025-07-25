import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./pages/reset.css";
import "./pages/colors-light.css";
import "./pages/colors-dark.css";
import "./main.css";
import { RestaurantPageContainer } from "./pages/restaurant-page-container.jsx";
import { Provider } from "react-redux";
import { store } from "./data/redux/store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RestaurantPageContainer />
    </Provider>
  </StrictMode>
);
