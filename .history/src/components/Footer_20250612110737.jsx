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
    <div className="flex flex-col justify-around text-center bg-black border-t-2 py-7 gap-x-10  sm:flex-row pt-20">
      <div>
        <h1 className="text-white">Rohullah Noori</h1>
      </div>
      <div>
        <a href="">
          <FaWhatsapp className="text-xl text-green-500" />
        </a>
      </div>
      <div>
        <a
          href=""
          className="w-[50px] h-[50px] items-center justify-center align-middle bg-gray-200 rounded-full "
        >
          <FaLinkedin className="text-xl text-blue-500" />
        </a>
      </div>
      <div>
        <a href="">
          <FaPhone className="text-xl text-white" />
        </a>
      </div>
      <div>
        <a href="">
          <FaTelegram className="text-xl text-blue-300" />
        </a>
      </div>

      <div>
        <a href="">
          <MdEmail className="text-xl text-white" />
        </a>
      </div>
      <div>
        <a href="">
          <FaGithub className="text-xl text-white" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
