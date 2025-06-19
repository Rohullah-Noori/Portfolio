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

        <div className="flex w-full grid-cols-1 gap-6 p-4 text-start sm:grid-cols-2 md:p-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full p-3 transition"
          >
            <div
              className="w-full max-h-64 md:max-h-[500px] bg-cover bg-center bg-no-repeat rounded-lg"
              style={{
                backgroundImage: `url(${image})`,
                aspectRatio: "16/9",
              }}
            />

            <div className="w-full mt-6 space-y-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
