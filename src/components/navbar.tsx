import NavbarLink from "./navbarlink";
import DarkModeSwitch from "./darkModeSwitch";
import DropDownMenu from "./dropDownMenu";

type setColorProps = {
  color: string;
  setColor: (color: string) => void;
};

const Navbar = ({ color, setColor }: setColorProps) => {
  return (
    <nav className="flex items-center h-16 justify-between px-20 sticky top-0 z-50 border-b-2 bg-indigo-100 text-indigo-900 border-indigo-500 dark:bg-indigo-900 dark:text-indigo-100">
      <NavbarLink id="/" text="Norbert Istvan Cseh" />
      <NavbarLink id="/about" text="About me" />
      <NavbarLink id="/experience" text="Experience" />
      <NavbarLink id="/contact" text="Contact" />
      <DropDownMenu
        links={[
          { link: "/sorting", text: "Sorting visualize" },
          { link: "/hellothere", text: "Hello there" },
        ]}
      />
      <DarkModeSwitch color={color} setColor={setColor} />
    </nav>
  );
};

export default Navbar;
