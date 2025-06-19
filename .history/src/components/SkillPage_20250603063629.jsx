import Container from "./Container";
import Skills from "./Skills";
import {
  FaBootstrap,
  FaBrush,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaWordpress,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import React from "react";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";

function SkillPage() {
  const SkillsCard = [
    {
      title: "HTML",
      titleIcon: <FaHtml5 className="w-10 h-10" />,
      percentage: 100,
    },
    {
      title: "CSS",
      titleIcon: <FaCss3Alt className="w-10 h-10" />,
      percentage: 60,
    },
    {
      title: "TailwindCSS",
      titleIcon: <SiTailwindcss className="w-10 h-10" />,
      percentage: 100,
    },
    {
      title: "BootStrap",
      titleIcon: <FaBootstrap className="w-10 h-10" />,
      percentage: 100,
    },
    {
      title: "JavaScript",
      titleIcon: <FaJsSquare className="w-10 h-10" />,
      percentage: 70,
    },
    {
      title: "React.JS",
      titleIcon: <FaReact className="w-10 h-10" />,
      percentage: 70,
    },
    {
      title: "Next.JS",
      titleIcon: <SiNextdotjs className="w-10 h-10" />,
      percentage: 60,
    },
    {
      title: "WordPress Design",
      titleIcon: <FaWordpress className="w-10 h-10" />,
      percentage: 100,
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: 80,
    },
    {
      title: "FaWordpress",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: 80,
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: 80,
    },
  ];

  return (
    <div className="mt-20 text-center text-white bg-black">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 cursor-pointer text-start sm:grid-cols-2 lg:grid-cols-2 md:p-5">
          {SkillsCard.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
              className="p-3 transition"
            >
              <Skills
                title={item.title}
                titleIcon={item.titleIcon}
                percentage={item.percentage}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SkillPage;
