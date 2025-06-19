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
      <FaLinkedin />
      <FaPhone />
      <FaTelegram />
      <FaVoicemail />
      <FaGithub />
    </div>
  );
}

export default Footer;
