import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <nav className="w-[90%] md:w-[70%] bg-gray-50 shadow-sm py-4 rounded-xl">
        <div className="flex justify-between items-center px-5 md:px-20">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-5">
              <Image
                src="/logo.png"
                alt="Data Vidhya Logo"
                width={32}
                height={32}
              />
              <span className="text-gray-800 font-medium text-lg">Data Vidhya</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <ul className="flex items-center gap-8">
              <li><a href="#home" className="text-gray-800 hover:text-gray-600">Home</a></li>
              <li><a href="#courses" className="text-gray-800 hover:text-gray-600">Courses</a></li>
              <li><a href="#platform" className="text-gray-800 hover:text-gray-600">Platform</a></li>
              <li><a href="#projects" className="text-gray-800 hover:text-gray-600">Resources</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
