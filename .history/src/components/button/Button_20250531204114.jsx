function Button({ children }) {
  return (
    <button className="px-6 py-3 font-bold text-white bg-blue-400 outline-2 outline-white rounded-4xl hover:text-black">
      {children}
    </button>
  );
}

export default Button;
