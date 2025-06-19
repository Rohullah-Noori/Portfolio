import Container from "./Container";
import image from "../assets/aboutme.jpg";
import Button from "./button/Button";
import { motion } from "framer-motion";
import { BiHome, BiMapPin, BiPhone } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiMvAiLine } from "react-icons/ri";
import { HiMail, HiUser } from "react-icons/hi";
function About() {
  return (
    <div>
      <Container>
        <section className="flex flex-col justify-center w-full min-h-screen gap-6 md:flex-row md:gap-8">
          <div className="flex justify-center w-full md:w-1/2">
            <motion.img
              src={image}
              alt="About"
              className="object-cover w-full max-w-md max-h-64 md:max-h-[500px] rounded-4xl md:block"
              style={{
                boxShadow: "0 0 60px rgba(56, 189, 248, 0.5)",
              }}
              initial={{ opacity: 0, y: -80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}

              // initial={{ opacity: 0, y: -30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 1, delay: 0.1 }}
              // viewport={{ once: true, amount: 0.4 }}
            />
          </div>

          <div className="w-full space-y-6 md:w-1/2">
            <h1 className="text-xl font-bold md:text-3xl">About Me</h1>
            <p>
              I'm a passionate{" "}
              <span className="text-blue-400"> Frontend Web Developer </span>
              with a strong focus on clean, responsive web interfaces. I also
              specialize in{" "}
              <span className="text-blue-400">WordPress design</span> , creating
              fast and user-friendly websites tailored to client needs. With a
              blend of coding and design skills, I bring ideas to life across
              modern web platforms.
            </p>

            <div className="flex flex-col pb-5 text-sm font-semibold gap-y-2 md:text-lg">
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                <HiUser className="w-6 h-6 text-white" />
                <span className="text-blue-400">Rohullah Noori</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                <FaMapMarkerAlt className="w-6 h-6 text-white" />
                <span className="text-blue-400">
                  Jebrail, Herat, Afghanistan
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                <BiHome className="w-6 h-6 text-white" />
                <span className="text-blue-400">3001</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                <HiMail className="w-6 h-6 text-white" />
                <span className="text-blue-400">
                  <a href="mailto:rohullah313noori313@gmail.com">
                    rohullah313noori313@gmail.com
                  </a>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-4">
                <BiPhone className="text-white w-7 h-7" />
                <span className="text-blue-400">
                  <a href="tel:+93731142295">+93731142295</a>
                </span>
              </div>
            </div>

            <Button>Download Cv</Button>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default About;
