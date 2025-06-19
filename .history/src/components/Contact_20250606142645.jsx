import ContactForm from "./contactform/ContactForm";
import image from "../assets/aboutme.jpg";
import Container from "./Container";
import { motion } from "framer-motion";
import ContactAddress from "./contactform/ContactAddress";
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import mapUrl from "../services/Map";
import Email from "../services/Email";
import phone from "../services/phone";

function Contact() {
  const contactItem = [
    {
      icon: (
        <a href={mapUrl}>
          <FaMapMarkerAlt className="text-2xl text-red-400 transition-colors hover:text-blue-400" />
        </a>
      ),
      title: "Jebrail, Herat, Afghanistan",
      linkaddress: "#",
    },
    {
      icon: (
        <a href={Email}>
          <FaTelegramPlane className="text-2xl text-white transition-colors hover:text-blue-400" />
        </a>
      ),
      title: "EMAIL",
      linkaddress: <a href={Email}>rohullah313noori313@gmail.com</a>,
    },
    {
      icon: (
        <a>
          <FaPhoneAlt className="text-2xl text-green-600 transition-colors hover:text-green-800" />
        </a>
      ),
      title: "PHONE",
      linkaddress: <a href={phone}>+93731142295</a>,
    },
    {
      icon: (
        <FaLinkedin className="text-2xl text-blue-600 transition-colors hover:text-blue-800" />
      ),
      title: "LINKDIN",
      linkaddress: "#",
    },
  ];

  return (
    <div className="mt-20 text-center text-white bg-black">
      <Container>
        <div className="w-full px-5 py-5 text-center md:px-30">
          <h1 className="text-5xl font-bold">Contact</h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {contactItem.map((item) => (
            <ContactAddress
              key={item.title}
              icon={item.icon}
              title={item.title}
              linkaddress={item.linkaddress}
            />
          ))}
        </div>

        <div className="flex flex-col justify-center w-full max-w-screen-xl mx-auto text-center md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full md:w-1/2 h-64 md:h-[500px] overflow-hidden flex items-center justify-center"
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
            className="flex w-full bg-gray-100 md:w-1/2"
          >
            <div className="w-full max-w-md p-4 space-y-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
