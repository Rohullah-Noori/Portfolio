import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import image from "../assets/web.jpg";
import Travel from "../assets/travel.jpg";
import Skillbtn from "./button/Skillbtn";
import Movie from "../assets/movie.jpg";
import TaskApp from "../assets/task.jpg";
import Shoponline from "../assets/shopping.jpg";
import blog from "../assets/blog.jpg";
import bill from "../assets/bill.jpg";
function Projects() {
  const liveLinktravel = "https://travel-packing-app.vercel.app/";
  const githublinktravel =
    "https://github.com/Rohullah-Noori/Travel-packing-app";

  const liveLinkmovie = "https://react-movie-blog.vercel.app/";
  const githublinktmovie = "https://github.com/Rohullah-Noori/react-movie-blog";
  const liveLinktaskapp = "https://task-app-alpha-one.vercel.app";
  const githublinktaskapp = "https://github.com/Rohullah-Noori/TaskApp";
  const liveLinkonlineshop = "#";
  const githublinkonlineshop =
    "https://github.com/Rohullah-Noori/Nextjs-online-shop";

  const liveLinkblog = "https://atomic-blog-puce.vercel.app/";
  const githublinkblog = "https://github.com/Rohullah-Noori/Atomic-blog";

  const liveLinkbill = "#";
  const githublinkbill = "https://github.com/Rohullah-Noori/restaurant";
  const ProjectCardDetails = [
    {
      title: "Travel packing App",
      github: githublinktravel,
      live: liveLinktravel,
      imagebackground: Travel,
      description:
        "A simple and responsive React app to manage your travel packing list. Easily add, check off, and remove items quickly.",
      skills: [
        { icon: "html", title: "HTML" },
        { icon: "css", title: "CSS" },
        { icon: "react", title: "React" },
      ],
    },
    {
      title: "TaskApp",
      github: githublinktaskapp,
      live: liveLinktaskapp,
      imagebackground: TaskApp,
      description:
        " Task management app built with HTML, Tailwind CSS, and React for creating, editing, and tracking tasks ",

      skills: [
        { icon: "html", title: "HTML" },
        { icon: "react", title: "React" },
        { icon: "tailwind", title: "Tailwind CSS" },
      ],
    },
    {
      title: "Atomic Movie Blog",
      github: githublinktmovie,
      live: liveLinkmovie,
      imagebackground: Movie,
      description:
        "A responsive movie blog using React, HTML, and CSS. Easily search, track, and rate favorite films with a clean interface. ",

      skills: [
        { icon: "html", title: "HTML" },
        { icon: "css", title: "CSS" },
        { icon: "react", title: "React" },
      ],
    },
    {
      title: "OnlineShop",
      github: githublinkonlineshop,
      live: liveLinkonlineshop,
      imagebackground: Shoponline,
      description:
        "A fully responsive online shop built with Next.js, Tailwind CSS, and HTML featuring clean UI, dynamic routing, and smooth product browsing.",
      skills: [
        { icon: "html", title: "HTML" },

        { icon: "tailwind", title: "Tailwind CSS" },
        { icon: "nextjs", title: "Next.js" },
      ],
    },

    {
      title: "Blog Post",
      github: liveLinkblog,
      live: githublinkblog,
      imagebackground: blog,
      description:
        "A responsive blog post app built with React, HTML, and CSS. Features clean layout, dynamic content rendering, and smooth navigation for reading and managing posts.",

      skills: [
        { icon: "html", title: "HTML" },
        { icon: "css", title: "CSS" },
        { icon: "react", title: "React" },
      ],
    },
    {
      title: "Restaurant Bill App",
      github: githublinkbill,
      live: liveLinkbill,
      imagebackground: bill,
      description:
        "A simple and responsive restaurant bill app built with React, HTML, and CSS. Easily split bills, calculate totals, and manage group expenses efficiently.",

      skills: [
        { icon: "html", title: "HTML" },
        { icon: "css", title: "CSS" },
        { icon: "react", title: "React" },
      ],
    },
  ];
  return (
    <div className="mt-20 text-center bg-black text-w hite">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Projects</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 text-start sm:grid-cols-2 lg:grid-cols-3 md:p-5">
          {ProjectCardDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-3 transition "
            >
              <ProjectCard
                key={item.title}
                title={item.title}
                description={item.description}
                imagebackground={item.imagebackground}
                titleIcon={item.github}
                liveIcon={item.live}
                info={item.title}
                skills={item.skills}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
