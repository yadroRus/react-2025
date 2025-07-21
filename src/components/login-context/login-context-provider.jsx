import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return <LoginContext value={{ user, setUser }}>{children}</LoginContext>;
};
