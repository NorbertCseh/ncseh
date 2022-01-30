import NavbarLink from "../navbarlink";
import DarkModeSwitch from "../darkModeSwitch";
import DropDownMenu from "../dropDownMenu";

type setColorProps = {
  color: string;
  setColor: (color: string) => void;
};

const Navbar = ({ color, setColor }: setColorProps) => {
  return (
    <nav className="flex items-center h-16 justify-between px-20 sticky top-0 z-50 dark:bg-slate-800 bg-slate-100 text-slate-900 dark:text-slate-100 border-b-2  border-slate-700">
      <NavbarLink id="/" text="Norbert Istvan Cseh" />
      <NavbarLink id="/about" text="About me" />
      <NavbarLink id="/experience" text="Experience" />
      <DropDownMenu
        baseText="Projects"
        baseLink="/projects"
        links={[{ link: "sorting", text: "Sorting visualize" }]}
      />
      <DarkModeSwitch color={color} setColor={setColor} />
    </nav>
  );
};

export default Navbar;
