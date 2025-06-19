import { Link, Links } from "react-router-dom";
import Button from "./button/Button";
import Container from "./Container";
import image from "../assets/hero.png";
import About from "./About";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const fullText = "Rohullah Noori";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setIndex(0);
        }, 1000);
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="text-white bg-black ">
      <Container>
        <section className="flex flex-col items-center justify-between min-h-screen gap-6 p-4 md:flex-row">
          <div className="flex flex-col items-center justify-center w-full mb-10 space-y-6 md:w-1/2 md:mb-0">
            <h2 className="text-xl font-bold">Hi !</h2>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-xl font-bold md:text-3xl">
                I am
                <span className="px-2 font-extrabold text-blue-400">
                  {displayedText}
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

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 font-bold text-blue-400 bg-transparent cursor-pointer outline-2 outline-blue-400 rounded-4xl hover:text-white"
              >
                <Link to="/contact">Contact me</Link>
              </motion.button>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full md:w-1/2">
            <motion.div
              className="absolute border border-blue-400 rounded-full w-30 h-30 sm:w-46 sm:h-46 md:w-52 md:h-52"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.2, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                boxShadow: "0 0 60px 60px rgba(96, 165, 250, 0.5)",
              }}
            />

            <motion.img
              src={image}
              alt="Hero"
              className="relative z-0 w-40 h-auto rounded-full shadow sm:w-56 md:w-72 shadow-sky-100"
            />
          </div>
        </section>
      </Container>

      <About />
    </div>
  );
}

export default Hero;
