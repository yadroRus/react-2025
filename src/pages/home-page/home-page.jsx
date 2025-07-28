import { Link } from "../../components/link/link.jsx";
import { RESTAURANT_PAGE } from "../links-paths.js";

export const HomePage = () => {
  return (
    <>
      <h1> Главная страница</h1>
      <Link to={RESTAURANT_PAGE}>Рестораны</Link>
    </>
  );
};