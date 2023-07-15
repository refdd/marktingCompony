import React from "react";
import bg from "../public/assets/bgn-searching.jpg";
function Searching() {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="bg-cover bg-center bg-no-repeat w-full h-[350px] relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" relative flex flex-col gap-4 px-4">
            <div className="flex items-center gap-2">
              <span className="w-16 border-[1px]  border-secondColor  "></span>
              <p className="text-white text-lg  uppercase">
                GET SOLUTIONS FAST
              </p>
              <span className="w-16 border-[1px]  border-secondColor  "></span>
            </div>
            <div className="flex flex-col gap-1 text-4xl font-extrabold font-Sarabun capitalize">
              <span className="text-white">
                Searching for a First-Class Consultant?
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-center gap-3 mt-6 md:justify-end">
              <div className="flex justify-center items-center py-3 px-6 bg-secondColor transition-all cursor-pointer hover:shadow-md hover:-translate-y-1">
                <span className="text-white text-lg font-Sarabun capitalize font-semibold">
                  Request a Call Back
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searching;
