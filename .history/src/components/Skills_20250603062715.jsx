function Skills({ icon }) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-between h-full gap-6 p-4 cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="relative z-10 flex flex-col items-center w-full px-4 py-10 transition-colors duration-300 bg-blue-400 rounded-md"
        style={{ boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)" }}
      >
        {titleIcon}

        <hr className="w-20 h-1 mx-auto bg-white border-none rounded" />
      </div>
    </motion.div>
  );
}

export default Skills;
