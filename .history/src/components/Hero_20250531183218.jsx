import { Link } from "react-router-dom";
import Button from "./button/Button";
import Container from "./Container";
import image from "../assets/hero.png";

function Hero() {
  return (
    <div>
      <Container>
        <section className="flex flex-col md:flex-row p-4">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 mb-10 md:mb-0">
            <h2 className="text-xl font-bold">Hi!</h2>
            <h1 className="font-bold text-xl md:text-3xl">
              I am
              <span className="px-2 text-blue-400 font-extrabold">
                Rohullah Noori
              </span>
            </h1>
            <h3 className="text-lg md:text-2xl font-semibold">
              Frontend Web Developer and WordPress Designer
            </h3>
            <div>
              <Button>
                <Link to="/projects">Projects</Link>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-700">
            <img src={image} alt="Hero" className="max-w-full h-auto" />
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Hero;
