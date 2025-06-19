import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="flex flex-col justify-center text-center bg-black border-t-2 py-7 gap-x-10 sm:flex-row border-t-white">
      <a href=""></a> <FaWhatsapp className="text-xl text-green-500" />
      <a href=""></a> <FaLinkedin className="text-xl text-blue-500" />
      <a href=""></a> <FaPhone className="text-xl text-white" />
      <a href=""></a> <FaTelegram className="text-xl text-blue-300" />
      <a href=""></a> <MdEmail className="text-xl text-white" />
      <a href=""></a> <FaGithub className="text-xl text-white" />
    </div>
  );
}

export default Footer;
