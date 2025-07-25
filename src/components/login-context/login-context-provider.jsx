import { useState } from "react";
import { LoginContext } from "./hooks.js";

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = (name = "Пупкин") => setUser(name);

  const logout = () => setUser("");

  return (
    <LoginContext value={{ user, login, logout }}>{children}</LoginContext>
  );
};
