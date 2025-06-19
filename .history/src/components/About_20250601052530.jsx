import Container from "./Container";
import image from "../assets/hero.png";
import Button from "./button/Button";

function About() {
  return (
    <div>
      <Container>
        <section className="flex flex-col justify-center w-full gap-6 p-4 md:flex-row md:gap-4">
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src={image}
              alt="About"
              className="hidden w-full max-w-sm md:block"
            />
          </div>

          <div className="w-full space-y-6 md:w-1/2">
            <h1 className="text-xl font-bold md:text-3xl">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              inventore, est iusto porro ullam eos aperiam? Sed officiis
              voluptate omnis.
            </p>

            <div className="grid grid-cols-1 text-sm font-semibold sm:grid-cols-2 gap-x-4 gap-y-2 md:text-lg">
              <span>Full Name:</span>
              <span>Rohullah Noori</span>

              <span>Address:</span>
              <span>Jebrail, Herat, Afghanistan</span>

              <span>Zip code:</span>
              <span>3001</span>

              <span>Email:</span>
              <span>rohullah313noori313@gmail.com</span>

              <span>Phone:</span>
              <span>+93731142295</span>
            </div>

            <Button>Download Cv</Button>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default About;
