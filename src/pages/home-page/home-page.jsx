import { Link } from "../../components/link/link.jsx";
import { RESTAURANT_PAGE } from "../links-paths.js";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs.jsx";

export const HomePage = () => {
  return (
    <>
      <Breadcrumbs />
      <h1>Добро пожаловать!</h1>
      <br />
      <p>Самые свежие булочки только у нас!</p>
      <br />
      <p>Тут можно не только поесть, но и попить: <Link to={RESTAURANT_PAGE}>рестораны</Link></p>
      <br />
      <h2>Новости</h2>
      <ul>
        <li>Ресторан "Смятка" проводит акцию последнего пельменя!</li>
      </ul>
    </>
  );
};