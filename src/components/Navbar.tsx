import Link from "next/link";
import { BiCodeAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full h-16 z-[100] flex justify-between items-center">
      <Link href="/" className="flex items-center h-full pl-8">
        <BiCodeAlt className="text-3xl" />
        <h1 className="ml-2 uppercase font-bold">Hannah Eich</h1>
      </Link>
      <div className="font-bold flex gap-10 pr-8">
        <Link href="/about">about</Link>
        <Link href="/projects">projects</Link>
        <Link href="/experience">experience</Link>
        <Link href="/#contact">contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
