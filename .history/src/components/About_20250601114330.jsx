import Container from "./Container";
import image from "../assets/aboutme.jpg";
import Button from "./button/Button";
import { motion } from "framer-motion";
function About() {
  return (
    <div>
      <Container>
        <section className="flex flex-col justify-center w-full min-h-screen gap-6 p-4 md:flex-row md:gap-8">
          <div className="flex justify-center w-full md:w-1/2">
            <motion.img
              src={image}
              alt="About"
              className="object-cover w-full max-w-sm rounded-4xl md:block"
              style={{
                boxShadow: "0 0 30px rgba(56, 189, 248, 0.5)", // سایه آبی یکنواخت
              }}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            />
          </div>

          <div className="w-full space-y-6 md:w-1/2">
            <h1 className="text-xl font-bold md:text-3xl">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              inventore, est iusto porro ullam eos aperiam? Sed officiis
              voluptate omnis.
            </p>

            <div className="flex flex-col text-sm font-semibold gap-y-2 md:text-lg">
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
                <span>Full Name:</span>
                <span className="text-gray-400">Rohullah Noori</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
                <span>Address:</span>
                <span className="text-gray-400">
                  Jebrail, Herat, Afghanistan
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
                <span>Zip code:</span>
                <span className="text-gray-400">3001</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
                <span>Email:</span>
                <span className="text-gray-400">
                  rohullah313noori313@gmail.com
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
                <span>Phone:</span>
                <span className="text-gray-[#999999]">+93731142295</span>
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
