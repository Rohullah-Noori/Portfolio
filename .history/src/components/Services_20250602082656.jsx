import { FaGlobe } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

function Services() {
  const Cardservices = [
    {
      title: "web development",
      titleIcon: <FaGlobe className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "web development",
      titleIcon: <FaGlobe className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "web development",
      titleIcon: <FaGlobe className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "web development",
      titleIcon: <FaGlobe className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "web development",
      titleIcon: <FaGlobe className="w-10 h-10 text-blue-400" />,
    },
    {
      title: "web development",
      titleIcon: <FaGlobe className="w-10 h-10 text-blue-400" />,
    },
  ];

  return (
    <div>
      {Cardservices.map((item) => (
        <ServiceCard title={title} />
      ))}
    </div>
  );
}

export default Services;
