import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Skills({ percentage, titleIcon, title, getstatus }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-between h-full gap-6 p-4 ">
        <div className="w-[120px] h-[120px]">
          <h1>{title}</h1>
          <span>{titleIcon}</span>
          <CircularProgressbar
            value={percentage}
            text={get}
            styles={buildStyles({
              pathColor: "#38bdf8",
              textColor: "#ffffff",
              trailColor: "#333",
              backgroundColor: "#1e1e1e",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
