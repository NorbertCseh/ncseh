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

  const test = () => {
    console.log("sht");
  };

  if (color === "light") {
    return (
      <button onClick={changeColor}>
        <FaSun />
      </button>
    );
  } else {
    return (
      <button onClick={changeColor}>
        <FaMoon />
      </button>
    );
  }
};

export default darkModeSwitch;
