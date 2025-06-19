import Container from "./Container";
import image from "../assets/hero.png";
function About() {
  return (
    <div>
      <Container>
        <section className="flex flex-col items-center justify-center w-full p-4 space-y-6 md:flex-row md:space-x-4 md:space-y-0 ">
          <div>
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              inventore, est iusto porro ullam eos aperiam? Sed officiis
              voluptate omnis.
            </p>
          </div>
          <div><img src="" alt="" />/div>
        </section>
      </Container>
    </div>
  );
}

export default About;
