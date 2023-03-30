import Link from "next/link";
import { BiCodeAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="w-full h-16 z-[100] flex justify-between items-center">
      <Link href="/" className="flex items-center h-full pl-8">
        <BiCodeAlt className="text-3xl" />
        <h1 className="ml-2 uppercase font-bold">Hannah Eich</h1>
      </Link>
    </div>
  );
};

export default Navbar;
