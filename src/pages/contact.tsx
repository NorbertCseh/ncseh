import { SiProtonmail } from "react-icons/si";
import { FaFacebookMessenger, FaLinkedin, FaGithub } from "react-icons/fa";
import { NextPage } from "next";

const ContactSection: NextPage = () => {
  return (
    <section
      id="contact"
      className="w-full flex justify-center text-3xl h-screen items-center"
    >
      <a href="mailto:norbert.cseh@protonmail.com">
        <SiProtonmail className="mx-4" />
      </a>
      <a href="https://m.me/norbert.cseh.7" target="_blank" rel="noreferrer">
        <FaFacebookMessenger className="mx-4" />
      </a>
      <a
        href="https://www.linkedin.com/in/norbertistvancseh/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="mx-4" />
      </a>
      <a
        href="https://github.com/NorbertCseh/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="mx-4" />
      </a>
    </section>
  );
};

export default ContactSection;
