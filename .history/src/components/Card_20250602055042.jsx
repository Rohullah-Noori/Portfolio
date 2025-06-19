import { motion } from "framer-motion";
import { BiCalendar, BiMapPin } from "react-icons/bi";
import { FaMapPin } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";

function Card({ date, degree, university, description }) {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4 r">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)",
        }}
        className="w-full h-full px-2 py-2 text-white transition border-2 rounded-md border-b-blue-400 border-r-blue-400 "
      >
        <h1 className="flex items-center pb-2 text-2xl font-bold text-white gap-x-2 md:text-3xl">
          <BiCalendar className="w-6 h-6 text-blue-400" /> {date}
        </h1>
        <h1 className="flex items-center pb-3 text-2xl font-semibold text-black gap-x-2">
          <GiGraduateCap className="w-6 h-6 text-black" />
          {degree}
        </h1>
        <p className="flex text-md gap-x-2">
          <MdLocationOn className="w-6 h-6 text-black" />
          {university}
        </p>
        <p className="pt-5 text-md">{description}</p>
      </motion.div>
    </div>
  );
}

export default Card;
