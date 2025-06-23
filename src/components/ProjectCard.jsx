import { motion } from "framer-motion";
import { FaBroadcastTower, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Skillbtn from "./button/Skillbtn";
import { MdLiveTv } from "react-icons/md";

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
    <div className="flex flex-col h-full rounded-2xl">
      <div
        className="flex flex-col items-center w-full md:w-full md:h-[250px] h-[220px] px-4 py-10  bg-center bg-no-repeat bg-cover rounded-md"
        style={{ backgroundImage: `url(${imagebackground})` }}
      ></div>

      <div className="flex flex-col items-center w-full p-4 text-black bg-white rounded-b-md">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-center">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <Skillbtn key={index} title={skill.title} icon={skill.icon} />
          ))}
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <a
            href={MdLiveTv}
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
