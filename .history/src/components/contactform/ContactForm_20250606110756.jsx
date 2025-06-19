function ContactForm() {
  return (
    <div className="w-full border-2 border-blue-400 max-h-[500px] min-h-[400px]">
      <form action="" method="post">
        
          <div className="w-full px-2 py-3">
            <input type="text" name="subject" id="subject" placeholder="Name" />
            <input type="tel" name="phone" id="phone" value={"phone"} />
            <input type="text" name="name" id="name" className="" />
            <input type="email" name="email" id="email" />
            <textarea
              name="textarea"
              id=""
              placeholder="please write your message"
            ></textarea>
          </div>
        </div>
        <div>
          <button type="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
