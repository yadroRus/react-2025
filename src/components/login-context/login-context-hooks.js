import { useContext } from "react";
import { LoginContext } from "./login-context-provider.jsx";

export const useLogin = () => useContext(LoginContext);
