import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { image } from "../assets/web.jpg";
function Projects() {
  const link:https://task-app-alpha-one.vercel.app/login;
  const ProjectCardDetails = [
    {
      title: "Map",
      github: "",
      live: link
      image: "image",
    },
    {
      title: "",
      github: "",
      live: ,
      image: "image",
    },
    {
      title: "",
      github: "",
      live: "",
      image: "image",
    },
    {
      title: "",
      github: "",
      live: "",
      image: "image",
    },
    {
      title: "",
      github: "",
      live: "",
      image: "image",
    },
    {
      title: "",
      github: "",
      live: "",
      image: "image",
    },
    {
      title: "",
      github: "",
      live: "",
      image: "image",
    },
    {
      title: "",
      github: "",
      live: "",
      image: "image",
    },
  ];
  return (
    <div className="mt-20 text-center text-white bg-black">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 cursor-pointer text-start sm:grid-cols-2 lg:grid-cols-3 md:p-5">
          {ProjectCardDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.4 }}
              className="p-3 transition "
            >
              <ProjectCard
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

export default Projects;
