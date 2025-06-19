import { Link } from "react-router-dom";
import Button from "./button/Button";
import Container from "./Container";

function Hero() {
  return (
    <div>
      <Container>
        <section>
          <div>
            <div className="text-xl font-bold">
              <span> Hi !</span>
            </div>
            <div className=" font-bold text-xl md:text-3xl space-y-3">
              <h1>
                I am
                <span className="px-2 text-blue-400 font-extrabold text-xl md:text-3xl">
                  Rohullah Noori
                </span>
              </h1>
              <h3>frontend web developer and wordpress designer</h3>
              <div className="font-bold text-xl md:text-3xl ">
                <Button>
                  <Link to="/projects">Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Hero;
