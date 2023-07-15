import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaRegClock,
  FaTwitch,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
function SocialNav() {
  return (
    <div className="bg-[#1b4962] hidden md:block">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2 ">
          {/* right */}
          <div className="flex items-center gap-4">
            {/* duration */}
            <div className="flex items-center gap-2">
              <FaRegClock className="text-secondColor" />
              <p className="text-sm text-gray-400 font-Sarabun capitalize font-medium ">
                <span className="text-white  mr-3">Monday - Friday</span>8AM -
                9PM{" "}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <MdLocationOn className="text-secondColor" />
              <p className="text-sm text-gray-400 font-Sarabun capitalize font-medium ">
                <span className="text-white  mr-3">Offices</span>Bloomsbury
                Square, London WC1B 4EA
              </p>
            </div>
          </div>
          {/* left */}
          <div className="flex items-center gap-5">
            <p className="text-white text-[15px] font-Sarabun capitalize ">
              Visit our social pages
            </p>
            <ul className="flex items-center gap-3 text-secondColor ">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitch />
              </li>
              <li>
                <FaPinterest />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialNav;
