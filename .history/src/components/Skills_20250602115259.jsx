import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Skills({ percentage, titleIcon, title, getStatus }) {
  const getStatus = (percentage) => {
    if (percentage <= 40) return "#ef4444";
    if (percentage <= 70) return "#facc15";
    if (percentage <= 100) return "#38bdf8";
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-between h-full gap-6 p-4 ">
        <div className="w-[120px] h-[120px]">
          <h1>{title}</h1>
          <span>{titleIcon}</span>
          <CircularProgressbar
            value={percentage}
            text={percentage}
            styles={buildStyles({
              pathColor: "#38bdf8",
              textColor: "#ffffff",
              trailColor: "#333",
              backgroundColor: "#1e1e1e",
            })}
          />
          <FaCircle
            style={{
              color: getColor(),
              opacity: percentage / 100, // شفافیت
              fontSize: "1.8rem",
              transition: "all 0.3s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
