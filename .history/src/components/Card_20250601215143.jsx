import { motion } from "framer-motion";

function Card({ date, degree, university, description }) {
  return (
    <div className="flex flex-col items-center justify-between gap-6 p-4 r">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)",
        }}
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
        className="p-6 transition bg-white rounded-lg shadow hover:shadow-xl"
        whileHover={{ scale: 1.03 }}
        className="w-full h-full px-2 py-2 text-gray-700 transition bg-blue-400 rounded-md md:py-15 md:px-8 "
      >
        <h1 className="pb-2 text-2xl font-bold text-white md:text-3xl">
          {date}
        </h1>
        <h1 className="pb-3 text-2xl font-semibold text-black">{degree}</h1>
        <p className="text-md ">{university}</p>
        <p className="pt-5 text-md">{description}</p>
      </motion.div>
    </div>
  );
}

export default Card;
