import { motion } from "framer-motion";

function Card({ date, degree, university, description }) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 ">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)",
        }}
        className="w-full h-full px-5 py-5 text-gray-700 transition bg-blue-400 md:py-15 md:px-15 rounded-xl "
      >
        <h1 className="text-2xl font-bold text-white">{date}</h1>
        <h1 className="text-2xl font-semibold text-black ">{degree}</h1>
        <p className="text-md ">{university}</p>
        <p className="pt-5 text-md">{description}</p>
      </motion.div>
    </div>
  );
}

export default Card;
