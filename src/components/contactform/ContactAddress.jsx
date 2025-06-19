function ContactAddress({ icon, title, linkaddress }) {
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 text-center align-middle md:w-1/4 sm:w-1/2">
      {/* <div className="p-6 bg-white rounded-full inset-ring-2">{icon}</div> */}
      <div
        style={{
          boxShadow: "0 0 60px rgba(56, 189, 248, 0.5)",
        }}
        className="w-[100px] h-[100px] bg-black border flex items-center justify-center text-center align-middle border-blue-200 rounded-full ring-2 ring-inset ring-blue-400"
      >
        {icon}
      </div>
      <div className="flex flex-col items-center justify-center py-4 text-center ">
        <h2 className="text-lg ">{title}</h2>
        <p>{linkaddress}</p>
      </div>
    </div>
  );
}

export default ContactAddress;
