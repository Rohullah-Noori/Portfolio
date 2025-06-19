import { Link } from "react-router-dom";
import Button from "./button/Button";
import Container from "./Container";

function Hero() {
  return (
    <div>
      <Container>
        <section>
          <div>
            <h1 className=" text-xl md:text-3xl">
              Hi , I am
              <span className="font-bold text- md:text-3xl">
                {" "}
                Rohullah Noori
              </span>
            </h1>
            <h3>Frontend WEb developer and Wrodpress Designer</h3>
            <Button>
              <Link to="/projects">Projects</Link>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Hero;
