function ContactAddress({ icon, title, linkaddress }) {
  return (
    <div className="">
      {/* <div className="p-6 bg-white rounded-full inset-ring-2">{icon}</div> */}
      <div
        className="relative p-6 bg-white rounded-full before:absolute before:inset-0 before:border-2 before:border-blue-500 before:rounded-full before:p-1"
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
