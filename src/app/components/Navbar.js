import Image from "next/image";
import Link from "next/link";
import React from "react";
import Images from "../../../public/assets/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Images.logo} alt="Logo-Navbar" width={100} height={60} />
        </div>

        <div className="hidden md:flex space-x-6">
          <Link
            href={"/"}
            className="text-blue-700  hover:text-blue-500 transition"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="text-blue-700  hover:text-blue-500 transition"
          >
            Layanan
          </Link>
          <Link
            href={"/"}
            className="text-blue-700  hover:text-blue-500 transition"
          >
            Tentang kami
          </Link>
        </div>

        {/* <!-- Button --> */}
        <div class="hidden md:block">
          <button class="bg-blue-900 text-white py-2 px-6 rounded-2xl hover:bg-blue-600 transition">
            Pesan Layanan
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
