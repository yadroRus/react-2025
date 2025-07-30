import { ThemeButton } from "../components/theme-button/theme-button.jsx";
import { LoginButton } from "../components/login-button/login-button.jsx";
import { Cart } from "../components/cart/cart.jsx";
import { Outlet } from "react-router";
function Layout() {

  return (
    <>
      <header>
        <div></div>
        <div>
          <LoginButton />
          <Cart />
          <ThemeButton />
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
