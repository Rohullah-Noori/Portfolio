function Skills({ titleIcon }) {
  return (
    <div
      className="relative flex flex-col items-center justify-between h-full gap-6 p-4 cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="relative z-10 flex flex-col items-center w-full transition-colors duration-300 "
        style={{ boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)" }}
      >
        {titleIcon}
      </div>
    </div>
  );
}

export default Skills;
