import { useContext } from "react";
import ThemeWrapper from "../../context/theme";

const ThemeSwitcher = () => {
  const { setTheme } = useContext(ThemeWrapper);
  return (
    <div>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("dark")}>dark</button>
    </div>
  );
};

export default ThemeSwitcher;
