function Card({ date, degree, university, description }) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      <div className="w-full h-full bg-gray-400 py-15 px-15 md:w-1/2 rounded-xl ">
        <h1 className="text-2xl font-bold text-blue-400">{date}</h1>
        <h1 className="text-2xl font-semibold">{degree}</h1>
        <p className="text-md ">{university}</p>
        <p className="pt-5 text-md">{description}</p>
      </div>
    </div>
  );
}

export default Card;
