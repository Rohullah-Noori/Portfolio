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
    <div className="flex flex-col items-center justify-center w-full p-4 space-y-10 text-white bg-black md:flex-row md:p-10">
      {carddata.map((item) => (
        <Card
          data={item.date}
          degree={item.degree}
          university={item.university}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Projects;
