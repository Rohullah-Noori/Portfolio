function Skills() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between h-full gap-6 p-4 ">
        <div className="w-[120px] h-[120px]">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
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
