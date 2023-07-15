import React from "react";
import { RiUserLocationFill } from "react-icons/ri";
import { LuPhoneCall } from "react-icons/lu";
import { MdMarkEmailUnread, MdOutlineEmail } from "react-icons/md";

function GetInTouch() {
  return (
    <div className="bg-[#f5f5f5] my-20 ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3  py-9">
          <div className=" relative flex flex-col gap-4 px-4 md:grd-cols-7 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="w-16 border-[1px]  border-secondColor  "></span>
              <p className="text-textColor text-lg  uppercase">OUR OFFICES</p>
            </div>
            <div className="flex flex-col gap-1 text-4xl font-extrabold font-Sarabun capitalize">
              <span className="text-mainColor">Get in Touch</span>
            </div>
            <div className=" flex flex-col gap-4 md:flex-row">
              <p className=" ">
                Come and visit our quarters or simply send us an email anytime
                you want. We are open to all suggestions from our clients.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:col-span-2 md:items-center ">
            <div className="">
              <div className="flex gap-3">
                <RiUserLocationFill className="text-6xl text-secondColor" />
                <div className="flex flex-col gap-1">
                  <p className="text-mainColor text-2xl  font-bold capitalize font-Sarabun -mt-1">
                    Address
                  </p>
                  <div className="">
                    <p className="">Bloomsbury Square,</p>
                    <p> London WC1B 4EA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-3">
                <LuPhoneCall className="text-6xl text-secondColor" />
                <div className="flex flex-col gap-1">
                  <p className="text-mainColor text-2xl  font-bold capitalize font-Sarabun -mt-1">
                    Call us
                  </p>
                  <div className="">
                    <p className="">020 7946 020</p>
                    <p> 020 7996 223</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-3">
                <MdOutlineEmail className="text-6xl text-secondColor" />
                <div className="flex flex-col gap-1">
                  <p className="text-mainColor text-2xl  font-bold capitalize font-Sarabun -mt-1">
                    Email us
                  </p>
                  <div className="">
                    <p className="">info@avantage.co.uk</p>
                    <p>office@avantage.co.uk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
