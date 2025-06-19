import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
function ProjectCard({ titleIcon, info, title, liveIcon, imagebackground }) {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-between h-full gap-6 p-4 cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="relative z-10 flex flex-col items-center w-[400px]  h-[400px] px-4 py-10 transition-colors duration-300 bg-blue-400 bg-center bg-no-repeat bg-cover rounded-md "
        style={{ backgroundImage: `url(${imagebackground})` }}
      >
        <h1 className="py-4 font-semibold text-center text-white">{title}</h1>
      </div>

      <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full transition-opacity duration-300 rounded-md opacity-0 bg-black/40 group-hover:opacity-100">
        <span className="text-sm font-semibold text-white md:text-md ">
          {info}

          <div className="flex self-end gap-4 mb-4">
            <a
              href={liveIcon}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-blue-300"
              title="Live Preview"
            >
              <FaExternalLinkAlt />
            </a>
            <a
              href={titleIcon}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-blue-300"
              title="GitHub Repo"
            >
              <FaGithub />
            </a>
          </div>
        </span>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
