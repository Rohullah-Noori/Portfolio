import Container from "../Container";

function Button({ children }) {
  return (
    <Container>
      <button className="py-2 px-3 rounded-2xl bg-blue-400 outline-1 text-white hover:text-black">
        {children}
      </button>
    </Container>
  );
}

export default Button;
