import { motion } from "framer-motion";
export function ServiceCard({ title, titleIcon }) {
  return (
    <div className="flex flex-col items-center justify-between h-full gap-6 p-4 ">
      <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full text-lg font-semibold text-white transition-opacity duration-300 opacity-0 bg-black/40 backdrop-blur-md group-hover:opacity-100">
        <motion.div className="relative justify-center w-full h-full px-2 py-2 overflow-hidden text-center text-white transition bg-gray-500 rounded-md hover:bg-blue-400 md:py-15 md:px-15 group">
          <div className="relative z-10 flex flex-col items-center ">
            {titleIcon}
            <h1 className="justify-center py-4 font-semibold text-center text-md gap-x-2 md:lg">
              {title}
            </h1>
            <hr className="w-20 h-1 bg-white border-none rounded " />
            More Info
          </div>
        </motion.div>
      </div>
    </div>
  );
}
