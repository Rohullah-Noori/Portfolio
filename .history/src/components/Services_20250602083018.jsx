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
    <div className="text-center text-white bg-black">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 cursor-pointer text-start md:grid-cols-2 md:p-5">
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
              />
            </motion.div>
          ))}
        </div>
        <Button>Download Cv </Button>
      </Container>
    </div>

    // <div>
    //   {Cardservices.map((item) => (
    //     <ServiceCard
    //       key={item.title}
    //       title={item.title}
    //       titleIcon={item.titleIcon}
    //     />
    //   ))}
    // </div>
  );
}

export default Services;
