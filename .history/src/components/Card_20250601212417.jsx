function Card({ date, degree, university, description }) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      <div className="w-full h-full px-5 py-5 text-gray-600 bg-blue-400 md:py-15 md:px-15 rounded-xl">
        <h1 className="text-2xl font-bold text-black">{date}</h1>
        <h1 className="text-2xl font-semibold">{degree}</h1>
        <p className="text-md ">{university}</p>
        <p className="pt-5 text-md">{description}</p>
      </div>
    </div>
  );
}

export default Card;
