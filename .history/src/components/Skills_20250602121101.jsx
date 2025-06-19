import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skills({ percentage, titleIcon, title }) {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-4 p-4">
      <span className="text-2xl text-white">{titleIcon}</span>
      <h1 className="text-lg font-semibold text-white">{title}</h1>

      <div className="w-[100px] h-[100px]">
        <CircularProgressbar
          value={percentage}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#38bdf8", // بخش پرشده (آبی)
            trailColor: "#ffffff", // بخش خالی (سفید)
            textColor: "transparent", // متن مخفی بشه
            backgroundColor: "transparent",
          })}
        />
      </div>

      <div className="text-sm text-white">{percentage}%</div>
    </div>
  );
}

export default Skills;
