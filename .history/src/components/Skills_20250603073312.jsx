import React from "react";
import { motion } from "framer-motion";

function Skills({ titleIcon, title }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-between h-full gap-6 cursor-pointer group"
      whileHover={{ scale: 1.3 }}
      transition={{ duration: 0.3 }}
    >
      <div className="z-10 flex flex-col items-center transition-colors duration-300">
        <div
          className="text-3xl"
          style={{ boxShadow: "0 0 10px rgba(56, 189, 248, 0.9)" }}
        >
          {titleIcon}
        </div>
        <h4 className="mt-2 text-xl font-semibold">{title}</h4>
      </div>
    </motion.div>
  );
}

export default Skills;
