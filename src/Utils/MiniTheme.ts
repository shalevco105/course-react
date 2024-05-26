import { createContext } from "react";

type MiniTheme = {
    backgroundColor: string;
    color: string;
}

export const siteMiniTheme: MiniTheme = {
    backgroundColor: "blue",
    color: "white"
}

export const MiniThemeContext = createContext<MiniTheme>(null);
