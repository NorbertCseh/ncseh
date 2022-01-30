import { ReactNode } from "react";

type contactProps = {
  link: string;
  icon: ReactNode;
};

const Contact = (props: contactProps) => {
  return (
    <div className="flex hover:text-slate-700 dark:hover:text-slate-300">
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.icon}
      </a>
    </div>
  );
};

export default Contact;
