import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCircle } from "react-icons/fa6";
function Skills({ percentage, titleIcon, title }) {
  const getColor = () => {
    if (percentage <= 40) return "bg-red-500";
    if (percentage <= 70) return "bg-yellow-400";
    return "bg-blue-400";
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-between h-full gap-6 p-4 ">
        <div className="w-[120px] h-[120px]">
          <h1>{title}</h1>
          <span>{titleIcon}</span>
          <div
            className={`h-4 rounded-full transition-all duration-500 ${getColor()}`}
            style={{ width: `${percentage}%` }}
          ></div>
          <div className="mt-1 text-sm text-white">{percentage}%</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
