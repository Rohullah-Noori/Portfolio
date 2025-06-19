import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Skillbtn from "./button/Skillbtn";
function ProjectCard({
  titleIcon,
  info,
  title,
  liveIcon,
  imagebackground,
  description,
  skills = [],
}) {
  return (
    <div className="flex flex-col h-full ">
      <div
        className="relative z-10 flex flex-col items-center w-[230px] md:w-[320px] md:h-[300px]  h-[220px] px-4 py-10 transition-colors duration-300 bg-blue-400 bg-center bg-no-repeat bg-cover rounded-md "
        style={{ backgroundImage: `url(${imagebackground})` }}
      ></div>

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

      <div className="w-full h-full text-black bg-white">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <Skillbtn key={index} title={skill.title} icon={skill.icon} />
          ))}
        </div>
        <div className="flex align- gap-4 mb-4">
          <a
            href={liveIcon}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-black hover:text-blue-300"
            title="Live Preview"
          >
            <FaExternalLinkAlt />
          </a>
          <a
            href={titleIcon}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-black hover:text-blue-300"
            title="GitHub Repo"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
