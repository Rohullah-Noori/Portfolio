import { motion } from "framer-motion";

function Button({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 font-bold text-white bg-blue-400 cursor-pointer md:px-6 md:py-3 rounded-2xl hover:text-black"
    >
      {children}
    </motion.button>
  );
}

export default Button;
