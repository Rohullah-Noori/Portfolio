function ContactForm() {
  return (
    <div>
      <form action="" method="post">
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="" name="phone" id="email" />
        </div>
        <div>
          <label htmlFor="sbuject">subject</label>
          <input type="text" name="subject" id="subject" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
