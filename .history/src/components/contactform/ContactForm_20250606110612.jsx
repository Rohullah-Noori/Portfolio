function ContactForm() {
  return (
    <div className="w-full border-2 border-blue-400 max-h-[500px] min-h-[400px]">
      <form action="" method="post">
        <div>
          <div className="w-full">
            <input type="text" name="subject" id="subject" />
            <input type="tel" name="phone" id="phone" />
            <input type="text" name="name" id="name" className="" />
            <input type="email" name="email" id="email" />
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
