import Container from "./Container";
import { motion } from "framer-motion";
import Card from "./Card";
import Button from "./button/Button";
import { BiCalendar, BiMapPin } from "react-icons/bi";

import { GiGraduateCap } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import image from "../assets/edu.jpg";

function Resume() {
  const carddata = [
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2024",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "Bachelor of Computer Science ",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "Herat University, Herat, Afghanistan",
      description:
        "I am a Computer Science graduate from the Database department of a public university. I successfully completed my studies as one of the outstanding graduates.",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2019",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "High school diploma ",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "Jebrael Boys' High School, Herat, Afghanistan",
      description:
        "Earned a high school diploma from Jebrael Boys' High School with a 98.08% score, graduating top of my 12th-grade class.",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2023",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "Bachelor of Science in Computer Science",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2023",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "Bachelor of Science in Computer Science",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2023",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "Bachelor of Science in Computer Science",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2023",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "Bachelor of Science in Computer Science",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
  ];

  return (
    <div
      className="text-center text-white bg-black  bg-cover bg-center bg-no-repeat py-15 "
      style={{ backgroundImage: `url(${image})` }}
    >
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Resume</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 cursor-pointer text-start md:grid-cols-2 md:p-5  ">
          {carddata.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.4 }}
              className="p-3 transition"
            >
              <Card
                dataicon={item.dateIcon}
                locationIcon={item.locationIcon}
                degreeIcon={item.degreeIcon}
                key={index}
                date={item.date}
                degree={item.degree}
                university={item.university}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
        <Button>Download Cv </Button>
      </Container>
    </div>
  );
}

export default Resume;
