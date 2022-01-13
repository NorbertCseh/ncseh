import NavbarLink from "../../components/navbarlink"
import Link from "next/link"
import DarkModeSwitch from '../../components/darkModeSwitch'


type setColorProps = {
    color: string,
    setColor: void
}

const Navbar = ({ color, setColor }: setColorProps) => {
    return (
        <nav className="flex items-center h-16 justify-between px-20 sticky top-0 z-50 border-b-2 dark:border-indigo-500 dark:bg-indigo-900">
            <NavbarLink id="home" text="Norbert Istvan Cseh" />
            <NavbarLink id="about" text="About me" />
            <NavbarLink id="experience" text="Experience" />
            <NavbarLink id="contact" text="Contact" />
            <DarkModeSwitch color={color} setColor={setColor} />
        </nav>
    )
}

export default Navbar;