import { motion } from "framer-motion";
import { BiCalendar } from "react-icons/bi";

function Card({ date, degree, university, description }) {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4 r">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)",
        }}
        className="w-full h-full px-2 py-2 text-gray-700 transition bg-blue-400 rounded-md md:py-15 md:px-15 "
      >
        <h1 className="flex items-center pb-2 text-2xl font-bold text-white gap-x-2 md:text-3xl">
          <BiCalendar className="w-6 h-6 text-black" /> {date}
        </h1>
        <h1 className="pb-3 text-2xl font-semibold text-black">{degree}</h1>
        <p className="text-md ">{university}</p>
        <p className="pt-5 text-md">{description}</p>
      </motion.div>
    </div>
  );
}

export default Card;
