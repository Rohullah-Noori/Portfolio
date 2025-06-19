function ContactForm() {
  return (
    <div className="w-full border-2 border-blue-400 max-h-[500px] min-h-[400px]">
      <form action="" method="post">
        <div className="flex flex-col w-full px-2 py-3 ">
          <input
            type="text"
            name="name"
            id="name"
            className="p-2"
            placeholder="Name"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="tel" name="phone" id="phone" placeholder="Phone" />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="subject"
          />
          <textarea
            name="textarea"
            id=""
            rows={6}
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
