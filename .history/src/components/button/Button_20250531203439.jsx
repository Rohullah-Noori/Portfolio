function Button({ children }) {
  return (
    <button className="px-6 py-3 text-white bg-blue-400 rounded-6xl hover:text-black">
      {children}
    </button>
  );
}

export default Button;
