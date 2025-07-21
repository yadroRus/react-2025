import { ThemeButton } from "../theme-button/theme-button.jsx";
import { LoginButton } from "../login-button/login-button.jsx";

function Layout({ children, header }) {
  return (
    <>
      <header>
        <ThemeButton />
        <LoginButton />
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
