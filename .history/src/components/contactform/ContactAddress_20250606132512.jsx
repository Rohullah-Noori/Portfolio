function ContactAddress({ icon, title, linkaddress }) {
  return (
    <div className="">
      {/* <div className="p-6 bg-white rounded-full inset-ring-2">{icon}</div> */}
      <div
        style={{
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.5)",
        }}
        className="p-6 bg-black border border-blue-200 rounded-full ring-2 ring-inset ring-blue-400"
      >
        {icon}
      </div>
      <div className="flex flex-col items-center justify-center text-center ">
        <h2 className="">{title}</h2>
        <p>
          <a href="#">{linkaddress}</a>
        </p>
      </div>
    </div>
  );
}

export default ContactAddress;
