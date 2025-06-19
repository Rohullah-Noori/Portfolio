function ContactForm() {
  return (
    <div className="w-full p-4 bg-white">
      <form action="" method="post" className="w-full">
        <div className="flex flex-col w-full space-y-4">
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 text-gray-800 placeholder-black border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 text-gray-800 placeholder-black border border-gray-300 focus:border-gray-500 focus:outline-none"
            placeholder="Email"
          />

          <input
            type="text"
            name="subject"
            id="subject"
            className="p-2 text-gray-800 placeholder-black border border-gray-300 focus:border-gray-500 focus:outline-none"
            placeholder="Subject"
          />
          <textarea
            name="textarea"
            id="message"
            rows={6}
            className="p-2 text-gray-800 placeholder-black border border-gray-300 focus:border-gray-500 focus:outline-none"
            placeholder="Please write your message"
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 text-white transition-colors bg-black hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
