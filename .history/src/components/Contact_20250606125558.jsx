import ContactForm from "./contactform/ContactForm";
import image from "../assets/aboutme.jpg";
import Container from "./Container";
import { motion } from "framer-motion";
import ContactAddress from "./contactform/ContactAddress";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const contactItem = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-red-500" />,
      title: "ADDRESS",
      linkaddress: "#",
    },
    {
      icon: (
        <MdEmail
          className="text-3xl transition-colors cursor-pointer hover:text-blue-400"
          onClick={() => (window.location.href = "mailto:example@email.com")}
        />
      ),
      title: "EMAIL",
      linkaddress: "#",
    },
    {
      icon: "1",
      title: "PHONE",
      linkaddress: "#",
    },
    {
      icon: "1",
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
