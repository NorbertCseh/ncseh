import Link from "next/link"

type NavbarLinkProps = {
    id: string,
    text: string
}

export const NavbarLink = ({ id, text }: NavbarLinkProps) => {

    return (
        <Link href={"#" + id}>
            <a className="text-xl hover:text-violet-300">
                {text}
            </a>
        </Link >
    )
}