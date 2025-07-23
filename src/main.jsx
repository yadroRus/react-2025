import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./pages/reset.css";
import "./pages/colors-light.css";
import "./pages/colors-dark.css";
import "./main.css";
import { RestaurantPage } from "./pages/restaurant-page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RestaurantPage />
  </StrictMode>
);
