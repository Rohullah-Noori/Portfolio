import ContactForm from "./contactform/ContactForm";
import image from "../assets/aboutme.jpg";
function Contact() {
  return (
    <div className="mt-20 text-center text-white bg-black">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Contact</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 text-start sm:grid-cols-2 md:p-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            className="p-3 transition "
          >
            <div className="" style={backgroundImage`${image}`}>
              image
            </div>
            <div>
              <ContactForm />
            </div>
          </motion.div>
        </div>

        <section className="flex flex-col justify-center w-full min-h-screen gap-6 md:flex-row md:gap-8">
          <div className="flex justify-center w-full md:w-1/2">
            <motion.img
              src={image}
              alt="About"
              className="object-cover w-full max-w-md max-h-64 md:max-h-[500px] rounded-4xl md:block"
              style={{
                boxShadow: "0 0 60px rgba(56, 189, 248, 0.5)",
              }}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            />
          </div>

          <div className="w-full space-y-6 md:w-1/2">
            <h1 className="text-xl font-bold md:text-3xl">About Me</h1>
            <p>
              I'm a passionate{" "}
              <span className="text-blue-400"> Frontend Web Developer </span>
              with a strong focus on clean, responsive web interfaces. I also
              specialize in{" "}
              <span className="text-blue-400">WordPress design</span> , creating
              fast and user-friendly websites tailored to client needs. With a
              blend of coding and design skills, I bring ideas to life across
              modern web platforms.
            </p>

            <Button>Download Cv</Button>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Contact;
