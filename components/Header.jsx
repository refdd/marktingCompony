import React from "react";
import bg from "../public/assets/img-slider-03.jpg";
function Header() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="h-[600px] w-full bg-center bg-cover relative md:h-[700px] "
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff80]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full ">
          <div className=" relative flex flex-col gap-4 px-4">
            <div className="flex items-center gap-2">
              <span className="w-24 border-[1px]  border-secondColor  "></span>
              <p className="text-textColor text-lg  uppercase">
                COMMITTED TO YOUR SUCCESS
              </p>
            </div>
            <div className="flex flex-col gap-1 text-6xl font-extrabold font-Sarabun capitalize">
              <span className="text-mainColor">Your success</span>
              <span className="text-secondColor"> Our business</span>
            </div>
            <div className="">
              <p className="text-[1.125rem] text-textColor font-medium font-Sarabun leading-6 md:w-[550px]">
                Energistically myocardinate clicks-and-mortar testing procedures
                whereas next-generation manufactured products.mz
              </p>
            </div>
            <div className="flex items-center gap-3 mt-11">
              <div className="flex justify-center items-center py-4 px-6 bg-secondColor">
                <span className="text-white text-lg font-Sarabun capitalize font-semibold">
                  View Portfolio
                </span>
              </div>
              <div className="flex justify-center items-center py-4 px-6 bg-mainColor">
                <span className="text-white text-lg font-Sarabun capitalize font-semibold">
                  View our Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
