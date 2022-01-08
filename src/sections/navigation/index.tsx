import NavbarLink from "../../components/navbarlink"
import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="flex h-16 justify-between px-20 pt-3 sticky top-0 z-50 bg-slate-800">
            <NavbarLink id="home" text="Norbert Istvan Cseh" />
            <NavbarLink id="about" text="About me" />
            <NavbarLink id="experience" text="Experience" />
            <NavbarLink id="projects" text="Projects" />
            <NavbarLink id="contact" text="Contact" />
        </nav>
    )
}

export default Navbar;