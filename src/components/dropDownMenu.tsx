import Link from "next/link";
import { ReactNode } from "react";

type dropDownMenuProps = {
  links: Array<link>;
};

type link = {
  link: string;
  text: string;
};

const createButtons = (rawlinks: dropDownMenuProps) => {
  let links: ReactNode[];

  links = rawlinks.links.map((e, k) => {
    return (
      <div
        key={k}
        className="bg-indigo-900 my-3 rounded-lg border-2 border-indigo-500 first:mt-6"
      >
        <Link href={"/projects" + e.link}>
          <a>{e.text}</a>
        </Link>
      </div>
    );
  });
  return links;
};

const DropDownMenu = (props: dropDownMenuProps) => {
  console.log(props);

  return (
    <div className="relative inline-flex justify-center items-center">
      <button className="group">
        <Link href="/projects">Projects</Link>
        <div className="invisible group-hover:visible absolute flex-col w-36 rounded-lg">
          {createButtons(props)}
        </div>
      </button>
    </div>
  );
};

export default DropDownMenu;
