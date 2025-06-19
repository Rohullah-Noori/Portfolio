import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaCircle } from "react-icons/fa6";

function Skills({ percentage, titleIcon, title }) {
  const getStatus = (percentage) => {
    if (percentage <= 40) return "#ef4444"; // قرمز
    if (percentage <= 70) return "#facc15"; // زرد
    return "#38bdf8"; // آبی
  };

  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4">
      <h1 className="mb-2 text-lg font-semibold text-white">{title}</h1>
      <span className="mb-2 text-2xl text-white">{titleIcon}</span>

      <div className="relative w-[120px] h-[120px]">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: getStatus(percentage),
            trailColor: "#333",
          })}
        />

        {/* آیکن وسط دایره */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <FaCircle
            style={{
              color: getStatus(percentage),
              opacity: percentage / 100,
              fontSize: "1.8rem",
              transition: "all 0.3s ease",
            }}
          />
        </div>
      </div>

      <div className="mt-1 text-sm text-white">{percentage}%</div>
    </div>
  );
}

export default Skills;
