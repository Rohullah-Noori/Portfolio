function Skills() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between h-full gap-6 p-4 r">
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)",
          }}
          className="w-full h-full px-2 py-2 text-white transition border-2 border-t-0 border-l-0 rounded-md md:py-3 md:px-3 border-b-blue-400 border-r-blue-400 "
        >
          <p className="pt-5 text-md">{description}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
