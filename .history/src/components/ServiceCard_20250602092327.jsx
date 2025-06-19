import { motion } from "framer-motion";
export function ServiceCard({ title, titleIcon }) {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4 ">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.9)",
        }}
        className="justify-center w-full h-full px-2 py-2 text-center text-white transition bg-gray-500 rounded-md md:py-20 md:px-15 "
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="justify-center pb-2 text-xl font-bold text-white gap-x-2 md:text-3xl">
            {titleIcon} {title}
            <hr className="w-20 h-1 bg-blue-400 border-none rounded" />
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
