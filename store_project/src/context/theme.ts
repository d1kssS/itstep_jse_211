import { Dispatch, SetStateAction, createContext } from "react";

export type TTheme = "light" | "dark";

interface IThemeContext {
  theme: TTheme;
  setTheme: Dispatch<SetStateAction<TTheme>>;
}

const ThemeWrapper = createContext<IThemeContext>({
  theme: "light",
  setTheme: () => {},
});
// Provider - поставщик значений
// Consumer - потребитель значений

export default ThemeWrapper;
