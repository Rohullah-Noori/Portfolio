import ContactForm from "./contactform/ContactForm";
import image from "../assets/aboutme.jpg";
import Container from "./Container";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="mt-20 text-center text-white bg-black">
      <Container>
        <div className="w-full px-5 py-5 text-center md:px-30">
          <h1 className="text-5xl font-bold">Contact</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full mx-10 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full md:w-1/2 h-64 md:h-[500px]  overflow-hidden"
          >
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full bg-gray-100 md:w-1/2"
          >
            <div className="p-4 space-y-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
