import { ThemeButton } from "../theme-button/theme-button.jsx";

function Layout({ children, header }) {
  return (
    <>
      <header>
        <ThemeButton />
        {header}
      </header>
      <main>{children}</main>
      <footer>Подвал</footer>
    </>
  );
}

export default Layout;
