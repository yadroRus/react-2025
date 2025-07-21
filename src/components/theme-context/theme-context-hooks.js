import { useContext } from "react";
import { ThemeContext } from "./theme-context-provider.jsx";

export const useTheme = () => useContext(ThemeContext);
