import { Button } from "../button/button.jsx";
import { useLoginContext } from "../login-context/hooks.js";

export const LoginButton = () => {
  const { user, login, logout } = useLoginContext();
  return !user.name ? (
    <Button
      onClick={() =>
        login({
          name: "Адольф Пупкин",
          userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
        })
      }
      text="Войти"
    />
  ) : (
    <>
      Привет {user.name}!
      <Button onClick={logout} text="Выйти" />
    </>
  );
};
