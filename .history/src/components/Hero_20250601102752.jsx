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
              <button className="px-6 py-3 font-bold text-blue-400 bg-transparent cursor-pointer outline-2 outline-blue-400 rounded-4xl hover:text-white">
                <Link to="/contact">Hire Me</Link>
              </button>
            </div>
          </div>

          {/* <div className="flex items-center justify-center w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              src={image}
              alt="Hero"
              className="h-auto rounded-full shadow-lg min-w-1 outline-2 outline-blue-400 md:max-w-sm shadow-blue-400/20 "
            />
          </div> */}

          <div className="relative flex items-center justify-center w-full md:w-1/2">
            {/* موج نورانی پالس‌دار دور عکس */}
            <motion.div
              className="absolute border border-blue-400 rounded-full w-72 h-72"
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
                boxShadow: "0 0 130px 100px rgba(255, 255, 255, 0.5)", // افکت نئون
              }}
              whileHover={{ filter: "blur(2px) drop-shadow(0 0 10px #3b82f6)" }}
              // transition={{ duration: 0.3 }}
            />

            {/* عکس اصلی */}
            <motion.img
              src={image}
              alt="Hero"
              className="relative z-0 h-auto rounded-full shadow shadow-sky-100 md:max-w-sm "
            />
          </div>
        </section>
      </Container>

      <About />
    </div>
  );
}

export default Hero;
