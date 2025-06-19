import { motion } from "framer-motion";
function ProjectCard({ titleIcon, info, title, liveIcon, imagebackground }) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-between h-full gap-6 p-4 cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="relative z-10 flex flex-col items-center w-full px-4 py-10 transition-colors duration-300 bg-blue-400 bg-center bg-no-repeat rounded-md "
        style={{ backgroundImage: `url(${imagebackground})` }}
      >
        {titleIcon}
        {liveIcon}
        <h1 className="py-4 font-semibold text-center text-white">{title}</h1>
        <hr className="w-20 h-1 mx-auto bg-white border-none rounded" />
      </div>

      <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full transition-opacity duration-300 rounded-md opacity-0 bg-black/40 group-hover:opacity-100">
        <span className="text-sm font-semibold text-white md:text-md ">
          {info}
        </span>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
