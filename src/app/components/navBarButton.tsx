import Link from "next/link";

type ButtonProps = {
  pageLink: string;
  text: string;
  navbar: any;
  setNavbar: any
};

export default function NavbarButton({ pageLink, text, navbar, setNavbar }: ButtonProps) {
  return (
      <li className="flex text-white py-3 md:text-2xl p-2 mx-auto
      hover:border-b hover:border-b-[#210A3E] hover:text-[#210A3E]
      hover:scale-110">
        <Link onClick={() => setNavbar(!navbar)} href={pageLink}>{text}</Link>
      </li>
  );
}
// hover:bg-purple-400 hover:outline-purple-700 hover:bg-opacity-10
