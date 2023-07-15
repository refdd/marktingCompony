import React from "react";
import MenuBar from "./MenuBar";
import Image from "next/image";
import logo from "../public/assets/logo (2).png";
import { AiOutlineSearch, AiFillPhone } from "react-icons/ai";
import { BsBagDashFill } from "react-icons/bs";
function NavBar() {
  return (
    <div className=" shadow-md">
      <div className="container mx-auto">
        <div className=" grid grid-cols-3 items-center gap-3 py-4 md:py-0 md:grid-cols-4 md:gap-5 ">
          <MenuBar />
          <div className="relative w-[200px] h-[120px]  md:w-[300px] md:h-[150px] md:col-span-1  ">
            <Image
              src={logo}
              fill
              alt="logo "
              className=" cursor-pointer"
              loading="eager"
            />
          </div>
          <div className="md:col-span-3 hidden md:block">
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-16 justify-center  ">
                <li className="text-lg text-[#181818] font-bold capitalize hover:text-gray-300 transition-all cursor-pointer ">
                  <span>home</span>
                </li>
                <li className="text-lg text-[#181818] font-bold capitalize hover:text-gray-300 transition-all cursor-pointer ">
                  <span>about us</span>
                </li>
                <li className="text-lg text-[#181818] font-bold capitalize hover:text-gray-300 transition-all cursor-pointer ">
                  <span>servers</span>
                </li>
                <li className="text-lg text-[#181818] font-bold capitalize hover:text-gray-300 transition-all cursor-pointer ">
                  <span>cases</span>
                </li>
                <li className="text-lg text-[#181818] font-bold capitalize hover:text-gray-300 transition-all cursor-pointer ">
                  <span>blog</span>
                </li>
                <li className="text-lg text-[#181818] font-bold capitalize hover:text-gray-300 transition-all cursor-pointer ">
                  <span>shop</span>
                </li>
              </ul>
              <div className="flex items-center gap-3">
                <AiOutlineSearch className="text-3xl text-textColor" />
                <BsBagDashFill className="text-3xl text-textColor transition-all cursor-pointer hover:text-secondColor" />
                <div className="flex justify-center items-center gap-2 py-4 px-5 bg-secondColor transition-all cursor-pointer hover:shadow-md hover:-translate-y-1">
                  <AiFillPhone className="text-white text-lg" />
                  <span className="text-white text-xl font-medium capitalize font-Sarabun">
                    020 7946 0020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
