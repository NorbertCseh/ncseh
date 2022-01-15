import Link from "next/link";

type NavbarLinkProps = {
  id: string;
  text: string;
};

const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <Link href={props.id}>
      <a className="text-xl hover:text-violet-300">{props.text}</a>
    </Link>
  );
};

export default NavbarLink;
