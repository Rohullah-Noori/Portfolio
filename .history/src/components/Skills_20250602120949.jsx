import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skills({ percentage, titleIcon, title }) {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4">
      <h1 className="mb-2 text-lg font-semibold text-white">{title}</h1>
      <span className="mb-2 text-2xl text-white">{titleIcon}</span>

      <div className="w-[120px] h-[120px]">
        <CircularProgressbar
          value={percentage}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#38bdf8", // رنگ قسمت پرشده
            trailColor: "#ffffff", // رنگ قسمت خالی
            pathTransitionDuration: 0.5,
          })}
        />
      </div>

      <div className="mt-1 text-sm text-white">{percentage}%</div>
    </div>
  );
}

export default Skills;
