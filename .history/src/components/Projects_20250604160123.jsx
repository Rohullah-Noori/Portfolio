import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import image from "../assets/web.jpg";
function Projects() {
  const liveLink = "https://task-app-alpha-one.vercel.app/login";
  const githublink = "https://github.com/Rohullah-Noori/TaskApp";
  const ProjectCardDetails = [
    {
      title: "Map",
      github: githublink,
      live: liveLink,
      imagebackground: image,
    },
    {
      title: "Map",
      github: githublink,
      live: liveLink,
      imagebackground: image,
    },
    {
      title: "Map",
      github: githublink,
      live: liveLink,
      imagebackground: image,
    },
    {
      title: "Map",
      github: githublink,
      live: liveLink,
      imagebackground: image,
    },
    {
      title: "Map",
      github: githublink,
      live: liveLink,
      imagebackground: image,
    },
    {
      title: "Map",
      github: githublink,
      live: liveLink,
      imagebackground: image,
    },
    {
      title: "Map",
      github: githublink,
      live: liveLink,
      imagebackground: image,
    },
    {
      title: "Map",
      github: githublink,
      live: liveLink,
      imagebackground: image,
    },
    {
      title: "Map",
      github: githublink,
      live: liveLink,
      imagebackground: image,
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
              // transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.4 }}
              className="p-3 transition "
            >
              <ProjectCard
                key={item.title}
                title={item.title}
                imagebackground={item.imagebackground}
                titleIcon={item.github}
                liveIcon={item.live}
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
