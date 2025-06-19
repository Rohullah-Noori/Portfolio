function Skills({ titleIcon }) {
  return (
    <div
      className="flex flex-col items-center justify-between h-full gap-6 cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="z-10 flex flex-col items-center transition-colors duration-300 "
        // style={{ boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)" }}
      >
        {titleIcon}
      </div>
    </div>
  );
}

export default Skills;
