import {
  FaGlobe,
  FaLaptopCode,
  FaPaintbrush,
  FaWordpress,
} from "react-icons/fa6";
import { ServiceCard } from "./ServiceCard";
import { motion } from "framer-motion";
import Container from "./Container";
import { FiCode } from "react-icons/fi";
import { MdDevices, MdSpeed } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
function Services() {
  const Cardservices = [
    {
      title: "UI Development",
      titleIcon: <FiCode className="w-10 h-10 " />,
      info: "HTML, CSS, JavaScript, React",
    },
    {
      title: "Responsive Design",
      titleIcon: <MdDevices className="w-10 h-10 " />,
      info: "",
    },
    {
      title: "Web Implementation",
      titleIcon: <FaLaptopCode className="w-10 h-10" />,
      info: "",
    },
    {
      title: "Performance Optimization",
      titleIcon: <MdSpeed className="w-10 h-10 " />,
      info: "",
    },
    {
      title: "WordPress Sites",
      titleIcon: <FaWordpress className="w-10 h-10" />,
      info: "",
    },
    {
      title: "Theme Customization",
      titleIcon: <FaPaintBrush className="w-10 h-10" />,
      info: "",
    },
  ];

  return (
    <div className="text-center text-white bg-black">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 cursor-pointer text-start sm:grid-cols-2 md:grid-cols-3 md:p-5">
          {Cardservices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.4 }}
              className="p-3 transition "
            >
              <ServiceCard
                key={item.title}
                title={item.title}
                titleIcon={item.titleIcon}
                info={item.info}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Services;
