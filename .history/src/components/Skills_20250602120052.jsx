import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skills({ percentage, titleIcon, title }) {
  const getOpacityColor = (baseColor, opacity) => {
    // رنگ سفید با شفافیت دلخواه
    if (baseColor === "white") return `rgba(255, 255, 255, ${opacity})`;
    if (baseColor === "blue") return `rgba(56, 189, 248, ${opacity})`; // آبی Tailwind sky-400
    return `rgba(255, 255, 255, ${opacity})`;
  };

  const baseColor = "white"; // یا "blue" اگر خواستی آبی باشه

  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4">
      <h1 className="mb-2 text-lg font-semibold text-white">{title}</h1>
      <span className="mb-2 text-2xl text-white">{titleIcon}</span>

      <div className="relative w-[120px] h-[120px]">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: getOpacityColor(baseColor, percentage / 100),
            trailColor: "#333",
          })}
        />
      </div>

      <div className="mt-1 text-sm text-white">{percentage}%</div>
    </div>
  );
}

export default Skills;
