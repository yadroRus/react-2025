import { useContext } from "react";
import { LoginContext } from "./login-context-provider.jsx";

export const useLoginContext = () => useContext(LoginContext);
