import Container from "./Container";
import image from "../assets/hero.png";
function About() {
  return (
    <div>
      <Container>
        <section className="flex flex-col justify-center w-full p-4 space-y-6 md:flex-row md:space-x-4 md:space-y-0 ">
          <div className="w-full md:w-1/2">
            <img src={image} alt="" />
          </div>
          <div className="w-full space-y-8 md:w-1/2">
            <h1 className="text-xl font-bold text-md md:text-3xl">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              inventore, est iusto porro ullam eos aperiam? Sed officiis
              voluptate omnis.
            </p>
            <div className="mt-4 space-y-4 font-semibold text-md md:text-xl ">
              <div>
                <span className="flex gap-x-2"></span>{" "}
              </div>
              <h3>Full Name : Rohullah Noori</h3>
              <h3>Address : Jebrail , Herat , Afghanistan</h3>
              <h3>Zip code : 3001</h3>
              <h3>Email : rohullah313noori313@gmail.com</h3>
              <h3>Phone : +93731142295</h3>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default About;
