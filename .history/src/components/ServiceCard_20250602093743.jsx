import { motion } from "framer-motion";
export function ServiceCard({ title, titleIcon }) {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4 ">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)",
        }}
        className="justify-center w-full h-full px-2 py-2 text-center transition bg-gray-500 rounded-md hover:bg-blue-400 md:py-15 md:px-15 "
      >
        <div className="flex flex-col items-center text-start ">
          {titleIcon}
          <h1 className="justify-center py-4 font-semibold text-center text-white text-md gap-x-2 md:lg">
            {title}
          </h1>
          <hr className="w-20 h-1 bg-white border-none rounded " />
        </div>
      </motion.div>
    </div>
  );
}
