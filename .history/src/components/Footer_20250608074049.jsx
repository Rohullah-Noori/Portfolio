import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTelegram,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col justify-center text-center bg-black border-t-2 py-7 gap-x-10 sm:flex-row border-t-white">
      <FaWhatsapp className="text-xl text-green-500" />
      <FaLinkedin className="text-xl text-red-500" />
      <FaPhone className="text-xl text-red-500" />
      <FaTelegram className="text-xl text-red-500" />
      <FaVoicemail className="text-xl text-red-500" />
      <FaGithub className="text-xl text-red-500" />
    </div>
  );
}

export default Footer;
