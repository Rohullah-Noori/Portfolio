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

import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";

function SkillPage() {
  const SkillsCard = [
    {
      title: "HTML",
      titleIcon: (
        <div className="flex items-center justify-center border-blue-400 rounded-full shadow-icon shadow-blue-600">
          <FaHtml5 className="w-12 h-12 text-blue-400" />
        </div>
      ),
    },
    { title: "CSS", titleIcon: <FaCss3Alt className="w-20 h-20" /> },

    {
      title: "Bootstrap",
      titleIcon: <FaBootstrap className="w-20 h-20" />,
    },
    {
      title: "TailwindCSS",
      titleIcon: <SiTailwindcss className="w-20 h-20" />,
    },
    { title: "JavaScript", titleIcon: <FaJsSquare className="w-20 h-20" /> },
    { title: "React.JS", titleIcon: <FaReact className="w-20 h-20" /> },
    { title: "Next.JS", titleIcon: <SiNextdotjs className="w-20 h-20" /> },
    { title: "WordPress", titleIcon: <FaWordpress className="w-20 h-20" /> },

    { title: "Git", titleIcon: <FaGitAlt className="w-20 h-20" /> },
    { title: "GitHub", titleIcon: <FaGithub className="w-20 h-20" /> },
  ];

  return (
    <div className="mt-20 text-center text-white bg-black">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
        <div className="grid w-full grid-cols-2 gap-6 p-4 cursor-pointer text-start sm:grid-cols-3 md:grid-cols-4 md:p-5">
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
