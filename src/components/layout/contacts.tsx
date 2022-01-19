import { SiProtonmail } from "react-icons/si";
import { FaFacebookMessenger, FaLinkedin, FaGithub } from "react-icons/fa";
import { NextPage } from "next";
import Contact from "../contact";

const Contacts = () => {
  return (
    <div
      id="contact"
      className="grid grid-cols-1 content-center justify-items-center gap-28 w-20 text-4xl h-screen "
    >
      <Contact
        link="mailto:norbert.cseh@protonmail.com"
        icon={<SiProtonmail />}
      />
      <Contact
        link="https://m.me/norbert.cseh.7"
        icon={<FaFacebookMessenger />}
      />
      <Contact
        link="https://www.linkedin.com/in/norbertistvancseh/"
        icon={<FaLinkedin />}
      />
      <Contact link="https://github.com/NorbertCseh" icon={<FaGithub />} />
    </div>
  );
};

export default Contacts;
