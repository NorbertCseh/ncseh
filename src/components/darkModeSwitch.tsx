import { FaSun, FaMoon } from "react-icons/fa";

type setColorProps = {
  color: string;
  setColor: (color: string) => void;
};

const darkModeSwitch = ({ color, setColor }: setColorProps) => {
  const changeColor = () => {
    if (color === "dark") {
      setColor("light");
    } else {
      setColor("dark");
    }
  };

  if (color === "dark") {
    return (
      <button onClick={changeColor}>
        <FaSun className="text-2xl text-yellow-500" />
      </button>
    );
  } else {
    return (
      <button onClick={changeColor}>
        <FaMoon className="text-2xl text-slate-600" />
      </button>
    );
  }
};

export default darkModeSwitch;
