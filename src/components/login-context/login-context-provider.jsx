import { useState } from "react";
import { LoginContext } from "./hooks.js";

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = ({ name, userId }) => setUser({ name, userId });

  const logout = () => setUser({});

  return (
    <LoginContext value={{ user, login, logout }}>{children}</LoginContext>
  );
};
