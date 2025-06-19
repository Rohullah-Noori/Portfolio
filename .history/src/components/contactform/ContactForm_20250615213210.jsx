import { motion } from "framer-motion";
import Button from "../button/Button";
import schema from "../../services/Zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
function ContactForm() {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors, isSubmitting },
    } = useForm({ resolver: zodResolver(schema) });
    const sumbit = async (data) => {
      try{
        const result=await emailjs.send(
          "service_obtj236",
          "template_l5quv6p"
        {
          name:data.name,
          email:data.email,
          subject:data.subject,
          message:data.message
        },
        "8QoMDyWOW8dwkWWaC",
      );
      alert("thanks for sending your message");
      reset();
      }catch(error){
        console.log("emailjs Error",error)
        alert("failed")
        
      }
    };
  return (
    <div className="w-full p-4 bg-gray-100">
      <form action="" method="post" className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col w-full space-y-4">
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 text-gray-800 placeholder-black transition-all bg-white border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <input
            type="email"
            name="email"
            id="email"
            className="p-2 text-gray-800 placeholder-black transition-all bg-white border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          <input
            type="text"
            name="subject"
            id="subject"
            className="p-2 text-gray-800 placeholder-black transition-all bg-white border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Subject"
          />
          {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
          <textarea
            name="textarea"
            id="message"
            rows={6}
            className="p-2 text-gray-800 placeholder-black transition-all bg-white border border-gray-300 rounded-lg focus:border-blue-300 focus:ring-2 focus:ring-blue-200 focus:outline-none"
            placeholder="Please write your message"
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>
        <btn className="mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 font-normal text-black bg-blue-400 cursor-pointer md:px-6 md:py-3 rounded-2xl"
          >
            Send Message
          </motion.button>
        </btn>
      </form>
    </div>
  );
}

export default ContactForm;
