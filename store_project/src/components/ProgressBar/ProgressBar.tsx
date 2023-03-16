import { FC } from "react";
import "./ProgressBar.css";

const ProgressBar: FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="progress_container">
      <div style={{ width: `${progress}%` }} className="progress_bar" />
    </div>
  );
};

export default ProgressBar;
