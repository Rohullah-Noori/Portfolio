function ContactAddress({ icon, title, linkaddress }) {
  return (
    <div className="">
      {/* <div className="p-6 bg-white rounded-full inset-ring-2">{icon}</div> */}
      <div
        className="p-6 bg-white border border-blue-200 rounded-full ring-2 ring-inset ring-blue-400"
      >
        {icon}
      </div>
      <h2>{title}</h2>
      <p>
        <a href="#">{linkaddress}</a>
      </p>
    </div>
  );
}

export default ContactAddress;
