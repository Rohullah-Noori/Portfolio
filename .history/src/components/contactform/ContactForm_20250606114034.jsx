import { motion } from "framer-motion";
import Button from "../button/Button";
function ContactForm() {
  return (
    <div className="w-full p-4 bg-gray-100">
      <form action="" method="post" className="w-full">
        <div className="flex flex-col w-full space-y-4">
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 text-gray-800 placeholder-black transition-all bg-white border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 text-gray-800 placeholder-black transition-all bg-white border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            className="p-2 text-gray-800 placeholder-black transition-all bg-white border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Subject"
          />
          <textarea
            name="textarea"
            id="message"
            rows={6}
            className="p-2 text-gray-800 placeholder-black transition-all bg-white border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Please write your message"
          ></textarea>
        </div>
        <div className="mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 font-normal text-black bg-blue-400 cursor-pointer md:px-6 md:py-3 rounded-2xl"
          >
            Send Message
          </motion.button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
