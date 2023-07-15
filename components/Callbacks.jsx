import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { PiCompassDuotone } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
import Image from "next/image";
import callbackImage from "../public/assets/img-callback.png";

function Callbacks() {
  return (
    <div>
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
          <div className="">
            <div className=" relative flex flex-col gap-4 px-4 border-b border-gray-300 pt-4 pb-10">
              <div className="flex items-center gap-2">
                <span className="w-16 border-[1px]  border-secondColor  "></span>
                <p className="text-textColor text-lg  uppercase">
                  REQUEST A CALL BACK
                </p>
              </div>
              <div className="flex flex-col gap-1 text-4xl font-extrabold font-Sarabun capitalize">
                <span className="text-mainColor">Get your Business</span>
                <span className="text-secondColor">Right up There</span>
              </div>
              <div className=" flex flex-col gap-4 md:flex-row">
                <p className=" ">
                  Phosfluorescently engage worldwide methodologies with
                  web-enabled technology. Interactively coordinate proactive
                  e-commerce via process-centric outside the box thinking.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div className="flex justify-center items-center py-3 px-6 bg-secondColor transition-all cursor-pointer hover:shadow-md hover:-translate-y-1">
                  <span className="text-white text-lg font-Sarabun capitalize font-semibold">
                    Request a Call Back
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 pt-8 md:pt-20 md:grid-cols-3">
              <div className="flex flex-col justify-center items-center gap-3">
                <FaMoneyBill className="text-8xl text-secondColor" />
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="text-mainColor text-4xl text-center font-extrabold capitalize font-Sarabun -mt-1">
                    500+
                  </p>
                  <p className="text-[12px] text-textColor ">
                    Business advices given over 30 years
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <PiCompassDuotone className="text-8xl text-secondColor" />
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="text-mainColor text-4xl text-center font-extrabold capitalize font-Sarabun -mt-1">
                    170+
                  </p>
                  <p className="text-[12px] text-textColor ">
                    Businesses guided over thirty years
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-3">
                <GiTrophyCup className="text-8xl text-secondColor" />
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="text-mainColor text-4xl text-center font-extrabold capitalize font-Sarabun -mt-1">
                    30+
                  </p>
                  <p className="text-[12px] text-textColor ">awards</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-[600px] md:h-full">
              <Image
                src={callbackImage}
                fill
                loading="lazy"
                alt="CallBack"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Callbacks;
