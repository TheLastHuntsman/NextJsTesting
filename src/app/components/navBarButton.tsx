import Link from "next/link";

type ButtonProps = {
  pageLink: string;
  text: string;
  navbar: any;
  setNavbar: any
};

export default function NavbarButton({ pageLink, text, navbar, setNavbar }: ButtonProps) {
  return (
      <li className="flex text-white py-3
      hover:outline outline-offset-4">
        <Link onClick={() => setNavbar(!navbar)} href={pageLink}>{text}</Link>
      </li>
  );
}
// hover:bg-purple-400 hover:outline-purple-700 hover:bg-opacity-10
