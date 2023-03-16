import { useContext } from "react";
import "./Container.css";
import ThemeWrapper from "../../context/theme";

const Container = (props: any) => {
  const { theme } = useContext(ThemeWrapper);
  return <div className={`wrapper ${theme}`}>{props.children}</div>;
};

export default Container;
