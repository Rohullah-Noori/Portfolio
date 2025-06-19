function Card({ date, degree, university, description }) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      <div className="bg-gray-400 py-15 px-15 md:w-1/2 rounded-xl ">
        <h1 className="text-2xl font-bold text-blue-400">{date}</h1>
        <h1 className="text-2xl font-semibold">{degree}</h1>
        <p className="text-md ">Cambridge University</p>
        <p className="pt-5 text-md">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
      </div>
    </div>
  );
}

export default Card;
