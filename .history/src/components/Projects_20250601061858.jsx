import Card from "./Card";
import Container from "./Container";

function Projects() {
  const carddata = [
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "I completed my Bachelor's degree in Computer Science from Kardan University, where I gained a solid foundation in programming, software development, and computer systems.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "Focused on web design, system architecture, and full-stack development.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "Graduated with distinction, specialized in frontend technologies.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "Practical experience through real-world web development projects.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "Gained deep understanding of algorithms, data structures, and UX/UI.",
    },
  ];

  return (
    <div className="text-white bg-black">
      <Container>
        <div className="grid w-full grid-cols-1 gap-6 p-4 md:grid-cols-2 md:p-10">
          {carddata.map((item, index) => (
            <Card
              key={index}
              date={item.date}
              degree={item.degree}
              university={item.university}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Projects;
