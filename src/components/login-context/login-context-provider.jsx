import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = (name = "Пупкин") => setUser(name);

  const logout = () => setUser("");

  return (
    <LoginContext value={{ user, login, logout }}>{children}</LoginContext>
  );
};
