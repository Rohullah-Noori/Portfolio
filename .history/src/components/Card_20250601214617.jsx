import { motion } from "framer-motion";

function Card({ date, degree, university, description }) {
  return (
    <div className="flex flex-col items-center justify-between gap-6 p-4 ">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)",
        }}
        className="w-full h-full px-2 py-2 text-gray-700 transition bg-blue-400 rounded-md md:py-1 md:px-1 "
      >
        <h1 className="text-2xl font-bold text-white md:text-5xl">{date}</h1>
        <h1 className="text-2xl font-semibold text-black ">{degree}</h1>
        <p className="text-md ">{university}</p>
        <p className="pt-5 text-md">{description}</p>
      </motion.div>
    </div>
  );
}

export default Card;
