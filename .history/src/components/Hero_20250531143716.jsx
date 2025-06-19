import Button from "./button/Button";

function Hero() {
  return (
    <div>
      <section>
        <div>
          <h1>
            Hi , I am <span> Rohullah Noori</span>
          </h1>
          <h3>Frontend WEb developer and Wrodpress Designer</h3>
          <Button>
            <Link to="/projects"></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
