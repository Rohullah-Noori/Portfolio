import Card from "./Card";

function Projects({ date, degree, university, description }) {
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
