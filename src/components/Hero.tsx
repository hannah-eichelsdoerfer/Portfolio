import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center">
      <h1 className="text-9xl font-bold">Hi, I'm Hannah 👋🏼</h1>

      <p>
        Full-stack software developer and postgraduate student in Information
        Technolgoy based on the Gold Coast, Australia 📍
      </p>

      <div className="flex gap-4">
        <a href="https://github.com/hannah-eichelsdoerfer" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hannah-eich/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/hannah.tech/" target="_blank">
          <FaInstagram />
        </a>
      </div>

      <Link href="/cv.pdf" target="_blank">
        <button className="bg-gray-900 text-white px-4 py-2 rounded-md">
          Download CV
        </button>
      </Link>
    </div>
  );
};

export default Hero;
