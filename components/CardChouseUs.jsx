import Image from "next/image";
import React from "react";

function CardChouseUs({ image, title, feature, desc, button }) {
  return (
    <div className="  shadow-md">
      <div
        style={{ backgroundImage: `url(${image.src})` }}
        className=" relative bg-top w-full h-[340px] bg-cover"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full ">
          <div className=" relative flex flex-col gap-4 px-4">
            <div className="flex items-center gap-2">
              <span className="w-16 border-[1px]  border-secondColor  "></span>
              <p className="text-textColor text-lg  uppercase">{title}</p>
            </div>
            <div className="flex flex-col gap-1 text-3xl font-extrabold font-Sarabun capitalize">
              <span className="text-mainColor">{feature}</span>
            </div>
            <div className="">
              <p className="text-[1.125rem] text-textColor font-medium font-Sarabun leading-6 ">
                {desc}
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <div className="flex justify-center items-center py-3 px-6 bg-secondColor transition-all cursor-pointer hover:shadow-md hover:-translate-y-1">
                <span className="text-white text-sm font-Sarabun capitalize font-semibold">
                  {button}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardChouseUs;
