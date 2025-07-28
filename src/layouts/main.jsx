import { ThemeButton } from "../components/theme-button/theme-button.jsx";
import { LoginButton } from "../components/login-button/login-button.jsx";
import { Cart } from "../components/cart/cart.jsx";
import { Outlet } from "react-router";
import { BackButton } from "../components/back-button/back-button.jsx";
import { Logo } from "../components/logo/logo.jsx";

function Layout() {

  return (
    <>
      <header>
        <Logo />
        <div>
          <LoginButton />
          <Cart />
          <ThemeButton />
        </div>
      </header>
      <main>
        <BackButton />
        <Outlet />
      </main>
      <footer>Подвал</footer>
    </>
  );
}

export default Layout;
