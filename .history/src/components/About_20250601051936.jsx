import Container from "./Container";
import image from "../assets/hero.png";
import Button from "./button/Button";

function About() {
  return (
    <div>
      <Container>
        <section className="flex flex-col items-center justify-center w-full gap-6 p-4 md:flex-row">
          {/* Image Section */}
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src={image}
              alt=""
              className="hidden w-full max-w-sm md:block"
            />
          </div>

          {/* Text Section */}
          <div className="w-full space-y-6 md:w-1/2">
            <h1 className="text-xl font-bold md:text-3xl">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              inventore, est iusto porro ullam eos aperiam? Sed officiis
              voluptate omnis.
            </p>

            <div className="flex flex-col gap-4 text-sm font-semibold sm:flex-row md:text-lg">
              {/* Labels */}
              <div className="flex flex-col gap-2 sm:w-1/2">
                <span>Full Name:</span>
                <span>Address:</span>
                <span>Zip code:</span>
                <span>Email:</span>
                <span>Phone:</span>
              </div>
              {/* Values */}
              <div className="flex flex-col gap-2 sm:w-1/2">
                <span>Rohullah Noori</span>
                <span>Jebrail, Herat, Afghanistan</span>
                <span>3001</span>
                <span>rohullah313noori313@gmail.com</span>
                <span>+93731142295</span>
              </div>
            </div>

            <Button>Download Cv</Button>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default About;
