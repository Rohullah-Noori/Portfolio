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
    <div>
      <FaWhatsapp className="text-xl text-red-500" />
      <FaLinkedin className="text-xl text-red-500" />
      <FaPhone className="text-xl text-red-500" />
      <FaTelegram className="text-xl text-red-500" />
      <FaVoicemail className="text-xl text-red-500" />
      <FaGithub className="text-xl text-red-500" />
    </div>
  );
}

export default Footer;
