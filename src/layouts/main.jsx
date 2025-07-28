import { ThemeButton } from "../components/theme-button/theme-button.jsx";
import { LoginButton } from "../components/login-button/login-button.jsx";
import { Cart } from "../components/cart/cart.jsx";
import { Outlet, useNavigate } from "react-router";
import { Button } from "../components/button/button.jsx";

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <Button onClick={() => navigate("/")} text="главная" />
        <Button onClick={() => navigate(-1)} text="назад" />
        <ThemeButton />
        <div>
          <LoginButton />
          <Cart />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Подвал</footer>
    </>
  );
}

export default Layout;
