function ContactForm() {
  return (
    // <div className="w-full border-2 border-blue-400 max-h-[500px] min-h-[400px]">
    //   <form action="" method="post">
    //     <div>
    //       <div className="w-full">
    //         <label htmlFor="Name">Name</label>
    //         <input type="text" name="name" id="name" />
    //       </div>
    //       <div>
    //         <label htmlFor="email">Email</label>
    //         <input type="email" name="email" id="email" />
    //       </div>
    //       <div>
    //         <label htmlFor="phone">Phone</label>
    //         <input type="tel" name="phone" id="phone" />
    //       </div>
    //       <div>
    //         <label htmlFor="sbuject">subject</label>
    //         <input type="text" name="subject" id="subject" />
    //       </div>
    //       <textarea
    //         name="textarea"
    //         id=""
    //         placeholder="please write your message"
    //       ></textarea>
    //     </div>
    //     <div>
    //       <button type="btn">Submit</button>
    //     </div>
    //   </form>
    // </div>
    <form className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="نام کامل"
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          required
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="موضوع"
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        placeholder="پیام شما..."
        required
        rows="5"
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
      >
        ارسال
      </button>
    </form>
  );
}

export default ContactForm;
