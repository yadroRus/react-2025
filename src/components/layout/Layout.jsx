function Layout({ children, header }) {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>Подвал</footer>
    </>
  );
}

export default Layout;
