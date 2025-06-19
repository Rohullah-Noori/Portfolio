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
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <p className="text-sm">
        &copy; 2025 Rohullah Noori. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/Rohullah-Noori"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/Rohullah"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:rohullah313noori313@gmail.com"
          className="hover:text-white transition"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
