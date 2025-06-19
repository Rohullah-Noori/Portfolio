import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Skills({ percentage, titleIcon, title }) {
  // تابعی که رنگ آبی با شفافیت براساس درصد برمی‌گردونه
  const getDynamicColor = (percent) => {
    const opacity = Math.max(0.15, percent / 100); // از 0.15 کمتر نشه تا دیده بشه
    return `rgba(56, 189, 248, ${opacity})`; // sky-400
  };

  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4">
      <h1 className="mb-2 text-lg font-semibold text-white">{title}</h1>
      <span className="mb-2 text-2xl text-white">{titleIcon}</span>

      <div className="relative w-[120px] h-[120px]">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: getDynamicColor(percentage),
            trailColor: "#333", // رنگ پشت مسیر
          })}
        />
      </div>

      <div className="mt-1 text-sm text-white">{percentage}%</div>
    </div>
  );
}

export default Skills;
