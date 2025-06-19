function Button({ children }) {
  return (
    <button className="p-2 rounded-2xl bg-blue-400 outline-1 text-white hover:text-black">
      {children}
    </button>
  );
}

export default Button;
