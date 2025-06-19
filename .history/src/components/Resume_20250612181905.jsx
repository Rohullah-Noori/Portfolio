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
      date: "2018,2017,2016",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "Advance English Certificates ",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university:
        " Afghan Institute of learning, Kawthar center, Academy Asre Naw",
      description:
        "Graduated from Advanced English programs at Asr-e-No Academy (2016), Kosar Center (2017), and Afghan Educational Institute (2018)",
    },

    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2020",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "Office Package Certificate",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: " Naw Jawanan Center , Herat, Afghanistan",
      description:
        "uccessfully completed the ICDL Office Package course, which included Hardware, Software, Windows, Word, PowerPoint, and Excel",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2023",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "ّFrontend Web Development",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "WASSA Organization, Herat, Afghanistan",
      description:
        "Successfully completed the Front-End Web Development training course at WASSA International Institute.",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2024",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "Wordpress design",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "Online Self Study,Herat, Afghanistan",
      description:
        "Successfully completed an online self-study course in  WordPress",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2023",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "WASSA Web Design Internship",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "WASSA Organization,Herat, Afghanistan",
      description:
        "Successfully completed a 4 months web design internship in WSSA Organization",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2024",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "Pomtech Co Internship",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "Pomtech Company,Herat, Afghanistan",
      description:
        "Successfully completed a 6 months wordpress design  internship in Pomtech Company",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2024-2025",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "IraqSoft Co. – Remote employee",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "IraqSoft Company, Baghdad, Iraq",
      description:
        "I have been working on WordPress design and development for this company for a year.",
    },
    {
      dateIcon: <BiCalendar className="w-6 h-6 text-blue-400" />,
      date: "2023",
      degreeIcon: <GiGraduateCap className="w-6 h-6 text-blue-400" />,
      degree: "",
      locationIcon: <MdLocationOn className="w-6 h-6 text-blue-400" />,
      university: "Andisha Sazan Organization, Herat, Afghanistan",
      description:
        "I have been working on WordPress design and development for this company for a year.",
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
