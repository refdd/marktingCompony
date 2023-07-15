import React from "react";
import { MdOutlineBalance, MdGroups } from "react-icons/md";
import { FaChartPie, FaChess, FaSortAmountUp } from "react-icons/fa";
function Consultancy() {
  return (
    <div className="mt-40 container mx-auto px-4">
      {/* head */}
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <div className="">
          <div className=" relative flex flex-col gap-4 px-4">
            <div className="flex items-center gap-2">
              <span className="w-16 border-[1px]  border-secondColor  "></span>
              <p className="text-textColor text-lg  uppercase">
                WHERE CAN WE HELP YOU
              </p>
            </div>
            <div className="flex flex-col gap-1 text-4xl font-extrabold font-Sarabun capitalize">
              <span className="text-mainColor">Consultancy</span>
              <span className="text-secondColor">Industries</span>
            </div>
            <div className="">
              <p className="text-[1.125rem] text-textColor font-medium font-Sarabun leading-6 ">
                Nanotechnology immersion along the information highway will
                close the loop on focusing solely on the bottom line. Override
                the digital divide with additional clickthroughs from DevOps.
              </p>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      {/* our consultancy */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 mt-9  pb-14 border-b-2 border-gray-200">
        {/* card */}
        <div className="">
          <div className="flex items-center gap-3">
            <MdOutlineBalance className="text-8xl text-secondColor" />
            <div className="flex flex-col gap-2">
              <p className="text-mainColor text-xl font-sans font-bold capitalize">
                Solicitory
              </p>
              <p className="md:w-[270px] ">
                Nanotechnology immersion along the information highway will
                close the loop on focusing solely on the bottom line
              </p>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="">
          <div className="flex items-center gap-3">
            <FaChartPie className="text-8xl text-secondColor" />
            <div className="flex flex-col gap-2">
              <p className="text-mainColor text-xl font-sans font-bold capitalize">
                Start Ups
              </p>
              <p className="md:w-[270px] ">
                Interactively coordinate proactive e-commerce via
                process-centric outside the box thinking.
              </p>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="">
          <div className="flex items-center gap-3">
            <MdGroups className="text-8xl text-secondColor" />
            <div className="flex flex-col gap-2">
              <p className="text-mainColor text-xl font-sans font-bold capitalize">
                Human Resources
              </p>
              <p className="md:w-[270px] ">
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="">
          <div className="flex items-center gap-3">
            <FaChess className="text-8xl text-secondColor" />
            <div className="flex flex-col gap-2">
              <p className="text-mainColor text-xl font-sans font-bold capitalize">
                Solicitory
              </p>
              <p className="md:w-[270px] ">
                Nanotechnology immersion along the information highway will
                close the loop on focusing solely on the bottom line
              </p>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="">
          <div className="flex items-center gap-3">
            <FaSortAmountUp className="text-8xl text-secondColor" />
            <div className="flex flex-col gap-2">
              <p className="text-mainColor text-xl font-sans font-bold capitalize">
                Solicitory
              </p>
              <p className="md:w-[270px] ">
                Nanotechnology immersion along the information highway will
                close the loop on focusing solely on the bottom line
              </p>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="">
          <div className="flex items-center gap-3">
            <MdGroups className="text-8xl text-secondColor" />
            <div className="flex flex-col gap-2">
              <p className="text-mainColor text-xl font-sans font-bold capitalize">
                Organisations
              </p>
              <p className="md:w-[270px] ">
                Seamlessly empower fully researched growth strategies and
                interoperable internal or organic sources.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex items-center justify-center gap-3 mt-6 ">
        <div className="flex justify-center items-center py-3 px-8 bg-mainColor transition-all cursor-pointer hover:shadow-md hover:-translate-y-1">
          <span className="text-white text-sm font-Sarabun capitalize font-semibold">
            View all Industries
          </span>
        </div>
      </div>
    </div>
  );
}

export default Consultancy;
