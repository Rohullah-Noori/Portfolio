import Card from "./Card";

function Projects({ date, degree, university, description }) {
  const carddata = [
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "I completed my Bachelor's degree in Computer Science from Kardan University, where I gained a solid foundation in programming, software development, and computer systems. This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "I completed my Bachelor's degree in Computer Science from Kardan University, where I gained a solid foundation in programming, software development, and computer systems. This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "I completed my Bachelor's degree in Computer Science from Kardan University, where I gained a solid foundation in programming, software development, and computer systems. This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "I completed my Bachelor's degree in Computer Science from Kardan University, where I gained a solid foundation in programming, software development, and computer systems. This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "I completed my Bachelor's degree in Computer Science from Kardan University, where I gained a solid foundation in programming, software development, and computer systems. This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
    {
      date: "2023",
      degree: "Bachelor of Science in Computer Science",
      university: "Kardan University, Kabul, Afghanistan",
      description:
        "I completed my Bachelor's degree in Computer Science from Kardan University, where I gained a solid foundation in programming, software development, and computer systems. This education has equipped me with the skills necessary to excel in the field of web development and design.",
    },
  ];
  return (
    <div>
      <Card
        data={date}
        degree={degree}
        university={university}
        description={description}
      />
    </div>
  );
}

export default Projects;
