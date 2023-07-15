import Image from "next/image";
import React from "react";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { MdCall, MdLocationPin, MdMail } from "react-icons/md";
import imgFooter from "../public/assets/img-footer-map.png";
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-mainColor pt-16 pb-11">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <div className=" py-10 border-b border-[#1818181a] md:border-b-0 md:col-span-1">
            <div className=" relative flex flex-col gap-2 px-4 ">
              <div className="flex items-center gap-2">
                <span className="w-16 border-[1px]  border-secondColor  "></span>
                <p className="text-white text-lg  uppercase">AVANTAGE</p>
              </div>
              <div className="flex flex-col gap-1 text-2xl font-extrabold font-Sarabun capitalize">
                <span className="text-secondColor">Headquarters</span>
              </div>
              <div className=" flex flex-col gap-4 md:flex-row">
                <p className=" text-white">
                  Come and visit our quarters or simply send us an email anytime
                  you want. We are open to all suggestions from our clients.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white hover:text-secondColor transition-all ">
                  <MdCall />
                  <span>020 7946 0020</span>
                </div>
                <div className="flex items-center gap-2 text-white hover:text-secondColor transition-all ">
                  <MdMail />
                  <span>info@avantage.co.uk</span>
                </div>
                <div className="flex items-center gap-2 text-white hover:text-secondColor transition-all ">
                  <BsGlobeCentralSouthAsia />
                  <span>avantage.co.uk</span>
                </div>
              </div>
            </div>
          </div>
          <div className="  py-10 border-b border-[#1818181a] md:border-b-0 md:col-span-2">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className=" relative flex flex-col gap-2 px-4 ">
                <div className="flex items-center gap-2">
                  <span className="w-16 border-[1px]  border-secondColor  "></span>
                  <p className="text-white text-lg  uppercase">OUR LOCATIONS</p>
                </div>
                <div className="flex flex-col gap-1 text-2xl font-extrabold font-Sarabun capitalize">
                  <span className="text-secondColor">Where to find us?</span>
                </div>
                <div className=" relative w-full h-[150px]">
                  <Image
                    src={imgFooter}
                    fill
                    alt="footer"
                    loading="lazy"
                    className=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className=" group flex items-center gap-2 text-white ">
                  <MdLocationPin className="text-secondColor group-hover:text-white transition-all" />
                  <span>London: 020 7946 0020</span>
                </div>
                <div className=" group flex items-center gap-2 text-white ">
                  <MdLocationPin className="text-secondColor group-hover:text-white transition-all" />
                  <span>Ontario: 613 285 5534</span>
                </div>
                <div className="group flex items-center gap-2 text-white ">
                  <MdLocationPin className="text-secondColor group-hover:text-white transition-all" />
                  <span>Tokyo: 0428 298 114</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:col-span-1">
            <div className=" relative flex flex-col gap-2 px-4 ">
              <div className="flex items-center gap-2">
                <span className="w-16 border-[1px]  border-secondColor  "></span>
                <p className="text-white text-lg  uppercase">GET IN TOUCH</p>
              </div>
              <div className="flex flex-col gap-1 text-2xl font-extrabold font-Sarabun capitalize">
                <span className="text-secondColor">Avantage Social links</span>
              </div>
              <div className=" flex flex-col gap-4 md:flex-row">
                <p className=" text-white">
                  Taking seamless key performance indicators offline to maximise
                  the long tail.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center p-4  rounded-full bg-secondColor">
                  <FaFacebook className="text-2xl text-white" />
                </div>
                <div className="flex justify-center items-center p-4  rounded-full bg-secondColor">
                  <FaTwitter className="text-2xl text-white" />
                </div>
                <div className="flex justify-center items-center p-4 rounded-full bg-secondColor">
                  <FaPinterest className="text-2xl text-white" />
                </div>
                <div className="flex justify-center items-center p-4  rounded-full bg-secondColor">
                  <FaLinkedin className="text-2xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
