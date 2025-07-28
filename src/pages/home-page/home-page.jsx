import { Link } from "../../components/link/link.jsx";

export const HomePage = () => {
  return (
    <>
      <h1> Главная страница</h1>
      <Link to={"/res"}>Рестораны</Link>
    </>
  );
};