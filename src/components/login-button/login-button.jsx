import { useLogin } from "../login-context/login-context-hooks.js";

export const LoginButton = () => {
  const { user, setUser } = useLogin();
  return !user ? (
    <button className="button" onClick={() => setUser("Пупкин")}>
      Войти
    </button>
  ) : (
    <>
      Привет {user}!{" "}
      <button className="button" onClick={() => setUser("")}>
        {" "}
        Выйти{" "}
      </button>
    </>
  );
};
