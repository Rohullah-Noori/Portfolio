import Container from "./Container";

function SkillPage() {
  const Cardservices = [
    {
      title: "Theme Customization",
      titleIcon: <FaPaintBrush className="w-10 h-10" />,
      info: "Theme & Plugin Customization in WordPress",
    },
  ];
  return (
    <div className="mt-20 text-center text-white bg-black">
      <Container>
        <div className="items-center justify-center w-full px-5 py-5 text-center md:px-30 ">
          <h1 className="text-5xl font-bold">Services</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 p-4 cursor-pointer text-start sm:grid-cols-2 lg:grid-cols-3 md:p-5">
          {Cardservices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.4 }}
              className="p-3 transition "
            >
              <ServiceCard
                key={item.title}
                title={item.title}
                titleIcon={item.titleIcon}
                info={item.info}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SkillPage;
