import { SiProtonmail } from 'react-icons/si'
import { FaFacebookMessenger, FaLinkedin, FaGithub } from 'react-icons/fa'

const ContactSection = () => {
    return (
        <section id="contact" className="w-full h-20 flex justify-center text-3xl">
            <a href="mailto:norbert.cseh@protonmail.com"><SiProtonmail className="mx-4" /></a>
            <a href="https://m.me/norbert.cseh.7" target="_blank"><FaFacebookMessenger className="mx-4" /></a>
            <a href="https://www.linkedin.com/in/norbertistvancseh/" target="_blank"><FaLinkedin className="mx-4" /></a>
            <a href="https://github.com/NorbertCseh/" target="_blank"><FaGithub className="mx-4" /></a >
        </section >
    )
}

export default ContactSection;