function ContactAddress({ icon, title, linkaddress }) {
  return (
    <div className="">
      <div>{icon}</div>
      <h2>{title}</h2>
      <p>
        <a href="#">{linkaddress}</a>
      </p>
    </div>
  );
}

export default ContactAddress;
