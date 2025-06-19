import Container from "./Container";
import image from "../assets/hero.png";
import Button from "./button/Button";
function About() {
  return (
    <div>
      <Container>
        <section className="flex flex-col justify-center w-full p-4 space-y-6 md:flex-row md:space-x-4 md:space-y-0 ">
          <div className="hidden md:w-1/2">
            <img src={image} alt="" />
          </div>
          <div className="w-full space-y-8 md:w-1/2">
            <h1 className="text-xl font-bold text-md md:text-3xl">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              inventore, est iusto porro ullam eos aperiam? Sed officiis
              voluptate omnis.
            </p>
            <div className="flex flex-row mt-4 space-x-5 font-semibold text-md md:text-xl ">
              <div className="flex flex-col gap-2">
                <span>Full Name:</span>
                <span>Address:</span>
                <span>Zip code:</span>
                <span>Email:</span>
                <span>Phone:</span>
              </div>
              <div className="flex flex-col ">
                <span>Rohullah Noori</span>
                <span>Jebrail , Herat , Afghanistan</span>
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
