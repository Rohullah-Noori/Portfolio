import Container from "./Container";
import Skills from "./Skills";
import { FaBrush } from "react-icons/fa6";
import { motion } from "framer-motion";
function SkillPage() {
  const SkillsCard = [
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: "100%",
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: "60%",
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: "100%",
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: "100%",
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: "100%",
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: "100%",
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: "100%",
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: "100%",
    },
    {
      title: "Theme Customization",
      titleIcon: <FaBrush className="w-10 h-10" />,
      percentage: "100%",
    },
  ];

  const getStatus = (percentage) => {
    if (percentage <= 40) return "#ef4444";
    if (percentage <= 70) return "#facc15";
    if (percentage <= 100) return "noncomplete";
  };

  return (
    <div className="mt-20 text-center text-white bg-black">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 cursor-pointer text-start sm:grid-cols-2 lg:grid-cols-3 md:p-5">
          {SkillsCard.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.4 }}
              className="p-3 transition "
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
