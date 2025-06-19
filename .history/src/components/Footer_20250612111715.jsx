import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    // <div className="flex flex-col justify-around  text-center bg-black border-t-2 py-7 gap-x-10  sm:flex-row sm:pt-20 pt-8">
    //   <div className="mb-10 sm:mb-0">
    //     <h1 className="text-white text-lg flex flex-col sm:flex-row sm:text-xl md:text-2xl">
    //       <span className=" text-blue-400 px-2">Rohullah Noori</span>
    //       Frontend Web Developer
    //     </h1>
    //   </div>
    //   <div className="flex sm:flex-row justify-center gap-x-6">
    //     <div>
    //       <a href="">
    //         <FaWhatsapp className="text-xl text-green-500" />
    //       </a>
    //     </div>
    //     <div>
    //       <a
    //         href=""
    //         className="w-[50px] h-[50px] items-center justify-center align-middle bg-gray-200 rounded-full "
    //       >
    //         <FaLinkedin className="text-xl text-blue-500" />
    //       </a>
    //     </div>
    //     <div>
    //       <a href="">
    //         <FaPhone className="text-xl text-white" />
    //       </a>
    //     </div>
    //     <div>
    //       <a href="">
    //         <FaTelegram className="text-xl text-blue-300" />
    //       </a>
    //     </div>

    //     <div>
    //       <a href="">
    //         <MdEmail className="text-xl text-white" />
    //       </a>
    //     </div>
    //     <div>
    //       <a href="">
    //         <FaGithub className="text-xl text-white" />
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <p className="text-sm">&copy; 2025 Anna. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/anna"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/anna"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:anna.dev@gmail.com"
          className="hover:text-white transition"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
