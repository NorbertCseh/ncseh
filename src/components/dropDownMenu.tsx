import Link from "next/link";
import { ReactNode } from "react";

type dropDownMenuProps = {
  baseText: string;
  baseLink: string;
  links: Array<link>;
};

type link = {
  link: string;
  text: string;
};

const createButtons = (rawlinks: link[], baseLink: string) => {
  let links: ReactNode[];

  links = rawlinks.map((e, k) => {
    return (
      <div
        key={k}
        className="bg-indigo-900 my-3 rounded-lg border-2 border-indigo-500"
      >
        <Link href={baseLink + "/" + e.link}>
          <a>{e.text}</a>
        </Link>
      </div>
    );
  });
  return links;
};

const DropDownMenu = (props: dropDownMenuProps) => {
  return (
    <div className="relative inline-flex justify-center items-center">
      <button className="group">
        <Link href={props.baseLink}>{props.baseText}</Link>
        <div className="invisible group-hover:visible absolute flex-col w-36 rounded-lg">
          {createButtons(props.links, props.baseLink)}
        </div>
      </button>
    </div>
  );
};

export default DropDownMenu;
