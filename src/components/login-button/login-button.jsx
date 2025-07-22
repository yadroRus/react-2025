import { Button } from "../button/button.jsx";
import { useLoginContext } from "../login-context/hooks.js";

export const LoginButton = () => {
  const { user, login, logout } = useLoginContext();
  return !user ? (
    <Button onClick={() => login()} text="Войти" />
  ) : (
    <>
      Привет {user}!
      <Button onClick={() => logout()} text="Выйти" />
    </>
  );
};
