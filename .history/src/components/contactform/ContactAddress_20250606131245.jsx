function ContactAddress({ icon, title, linkaddress }) {
  return (
    <div className="">
      <div className="p-6 bg-blue-200 rounded-full">{icon}</div>
      <h2>{title}</h2>
      <p>
        <a href="#">{linkaddress}</a>
      </p>
    </div>
  );
}

export default ContactAddress;
