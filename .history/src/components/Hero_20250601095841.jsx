import { Link, Links } from "react-router-dom";
import Button from "./button/Button";
import Container from "./Container";
import image from "../assets/hero.png";
import About from "./About";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const fullText = "Anna";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else {
        // بعد از اتمام، یک مکث و دوباره شروع از اول
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 1000);
      }
    }, 200); //

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="text-white bg-black ">
      <Container>
        <section className="flex flex-col p-4 md:flex-row">
          <div className="flex flex-col justify-center w-full mb-10 space-y-6 md:w-1/2 md:mb-0">
            <h2 className="text-xl font-bold">Hi !</h2>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-xl font-bold md:text-3xl">
                I am
                <span className="px-2 font-extrabold text-blue-400">
                  Rohullah Noori
                </span>
              </h1>
            </motion.div>

            <h3 className="text-lg font-semibold md:text-2xl">
              Frontend Web Developer and WordPress Designer
            </h3>
            <div className="flex pt-5 space-x-4">
              <Button>
                <Link to="/projects">Projects</Link>
              </Button>
              <button className="px-6 py-3 font-bold text-blue-400 bg-transparent cursor-pointer outline-2 outline-blue-400 rounded-4xl hover:text-white">
                <Link to="/contact">Hire Me</Link>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              src={image}
              alt="Hero"
              className="h-auto max-w-full shadow-lg rounded-xl"
            />
          </div>
        </section>
      </Container>

      <About />
    </div>
  );
}

export default Hero;
