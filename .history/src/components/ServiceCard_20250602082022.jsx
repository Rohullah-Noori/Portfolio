function ServiceCard({ title, titleIcon }) {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4 r">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)",
        }}
        className="w-full h-full px-2 py-2 text-white transition border-2 border-t-0 border-l-0 rounded-md md:py-3 md:px-3 border-b-blue-400 border-r-blue-400 "
      >
        <h1 className="flex items-center pb-2 text-xl font-bold text-white gap-x-2 md:text-3xl">
          {dateIcon} {title}
        </h1>
        <h1 className="flex items-center pb-3 text-lg font-semibold text-blue-400 md:text-2xl gap-x-2">
          {degreeIcon}
          {degree}
        </h1>
      </motion.div>
    </div>
  );
}

export default ServiceCard;
