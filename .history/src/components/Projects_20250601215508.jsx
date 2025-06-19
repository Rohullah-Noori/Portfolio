import { motion } from "framer-motion";
import Card from "./Card";
import Container from "./Container";

function Projects() {
  const carddata = [
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "I completed my Bachelor's degree in Computer Science from Kardan University, where I gained a solid foundation in programming, software development, and computer systems.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "Focused on web design, system architecture, and full-stack development.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "Graduated with distinction, specialized in frontend technologies.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "Practical experience through real-world web development projects.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "Gained deep understanding of algorithms, data structures, and UX/UI.",
    },
  ];

  return (
    <div className="text-white bg-black">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Resume</h1>
          <p className="py-10 text-center">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 cursor-pointer md:grid-cols-2 md:p-5">
          {carddata.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 transition bg-white rounded-lg shadow hover:shadow-xl"
            >
              <Card
                key={index}
                date={item.date}
                degree={item.degree}
                university={item.university}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
