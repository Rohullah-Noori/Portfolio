function ContactForm() {
  return (
    <div className="w-full">
      <form action="" method="post">
        <div>
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
            <input type="tel" name="phone" id="phone" />
          </div>
          <div>
            <label htmlFor="sbuject">subject</label>
            <input type="text" name="subject" id="subject" />
          </div>
          <textarea
            name="textarea"
            id=""
            placeholder="please write your message"
          ></textarea>
        </div>
        <div>
          <button type="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
