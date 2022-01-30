import Link from "next/link";

type NavbarLinkProps = {
  id: string;
  text: string;
};

const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <Link href={props.id}>
      <a className="text-xl hover:text-slate-600 hover:dark:text-slate-300">
        {props.text}
      </a>
    </Link>
  );
};

export default NavbarLink;
