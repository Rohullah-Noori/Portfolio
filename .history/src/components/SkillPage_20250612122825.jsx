import Container from "./Container";
import Skills from "./Skills";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaWordpress,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import image from "../assets/image.jpg";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";

function SkillPage() {
  const SkillsCard = [
    {
      title: "HTML",
      titleIcon: <FaHtml5 className="w-20 h-20 text-orange-600" />,
    },
    {
      title: "CSS",
      titleIcon: <FaCss3Alt className="w-20 h-20 text-blue-600" />,
    },

    {
      title: "Bootstrap",
      titleIcon: <FaBootstrap className="w-20 h-20 text-purple-600" />,
    },
    {
      title: "TailwindCSS",
      titleIcon: <SiTailwindcss className="w-20 h-20 text-teal-400" />,
    },
    {
      title: "JavaScript",
      titleIcon: <FaJsSquare className="w-20 h-20 text-yellow-400" />,
    },
    {
      title: "React.JS",
      titleIcon: <FaReact className="w-20 h-20 text-cyan-400" />,
    },
    {
      title: "Next.JS",
      titleIcon: (
        <SiNextdotjs className="w-20 h-20 text-black dark:text-white" />
      ),
    },
    {
      title: "TypeScript",
      titleIcon: (
        <SiTypescript className=" w-20 h-20 text-blue-600 text-4xl hover:text-blue-800 transition" />
      ),
    },
    {
      title: "WordPress",
      titleIcon: <FaWordpress className="w-20 h-20 dark:text-white" />,
    },

    {
      title: "Git",
      titleIcon: <FaGitAlt className="w-20 h-20 text-orange-600" />,
    },
    {
      title: "GitHub",
      titleIcon: <FaGithub className="w-20 h-20 text-black dark:text-white" />,
    },
  ];

  return (
    <div
      className="mt-20 text-center text-white  bg-black bg-cover bg-center bg-no-repeat z-1 "
      style={{ background: `url(${image})` }}
    >
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Skills</h1>
        </div>
        <div className="grid w-full grid-cols-2 gap-6 p-4 cursor-pointer text-start sm:grid-cols-3 md:grid-cols-4 md:p-5  ">
          {SkillsCard.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="p-3 transition"
            >
              <Skills titleIcon={item.titleIcon} title={item.title} />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SkillPage;
