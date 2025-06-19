function Button({ children }) {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <button className="px-6 py-3 font-bold text-white bg-blue-400 rounded-4xl hover:text-black">
        {children}
      </button>
    </motion.button>
  );
}

export default Button;
