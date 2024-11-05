"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-gray-300 text-gray-700 shadow-md font-sans">
      <div className="flex items-center justify-between xl:py-4 xl:px-16 xl:w-[65%] xl:m-auto px-4 py-4">
        {/* LOGO */}
        <div className="font-bold xl:text-2xl text-xl">
          <Link href={"page.tsx"}>LOGO</Link>
        </div>
        {/* Nav Items */}
        <ul className="flex gap-4 font-semibold xl:text-base text-sm">
          <Link
            href={"#"}
            className="xl:px-4 xl:py-2 xl:rounded-md xl:hover:shadow-md xl:hover:bg-gray-700 xl:hover:text-gray-300 xl:transition xl:duration-300 hover:cursor-pointer"
          >
            About
          </Link>
          <Link
            href={"#"}
            className="xl:px-4 xl:py-2 xl:rounded-md xl:hover:shadow-md xl:hover:bg-gray-700 xl:hover:text-gray-300 xl:transition xl:duration-300 hover:cursor-pointer"
          >
            Services
          </Link>
          <Link
            href={"#"}
            className="xl:px-4 xl:py-2 xl:rounded-md xl:hover:shadow-md xl:hover:bg-gray-700 xl:hover:text-gray-300 xl:transition xl:duration-300 hover:cursor-pointer"
          >
            Teams
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
