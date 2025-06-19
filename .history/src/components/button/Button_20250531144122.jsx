function Button({ children }) {
  return (
    <button className="pt-2 px-3 text-center rounded-2xl bg-blue-400 outline-1 text-white hover:text-black">
      {children}
    </button>
  );
}

export default Button;
