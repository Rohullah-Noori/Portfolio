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

        <div className="flex flex-col w-full gap-6 p-4 md:flex-row md:p-5">
          {/* Image Section - Takes full height on mobile, half width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full md:w-1/2 h-64 md:h-[500px] rounded-lg overflow-hidden"
          >
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          </motion.div>

          {/* Form Section - Takes full width on mobile, half width on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full p-6 bg-gray-900 rounded-lg md:w-1/2"
          >
            <div className="space-y-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
