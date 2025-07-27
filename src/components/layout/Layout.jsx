import { ThemeButton } from "../theme-button/theme-button.jsx";
import { LoginButton } from "../login-button/login-button.jsx";
import { Cart } from "../cart/cart.jsx";

function Layout({ children, header }) {
  return (
    <>
      <header>
        <ThemeButton />
        <div>
          <LoginButton />
          <Cart />
        </div>
      </header>
      <main>
        {header}
        {children}
      </main>
      <footer>Подвал</footer>
    </>
  );
}

export default Layout;
