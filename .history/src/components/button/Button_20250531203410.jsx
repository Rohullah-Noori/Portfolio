function Button({ children }) {
  return (
    <button className="px-6 py-2 text-white bg-blue-400 rounded-2xl outline-1 hover:text-black">
      {children}
    </button>
  );
}

export default Button;
