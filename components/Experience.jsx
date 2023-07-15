import Image from "next/image";
import React from "react";
import experienceImage from "../public/assets/img-experience.png";
import bg from "../public/assets/bgn-experience.png";
import CircularProgress from "@mui/material/CircularProgress";
import { CgSandClock } from "react-icons/cg";
import { FaSortAmountUp } from "react-icons/fa";
import { PiGlobeLight } from "react-icons/pi";
function Experience() {
  return (
    <div>
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="relative w-full h-[600px]  ">
              <Image
                src={experienceImage}
                fill
                loading="lazy"
                className=""
                alt="experience"
              />
            </div>
          </div>
          <div className="">
            <div className=" relative flex flex-col gap-4 px-4">
              <div className="flex items-center gap-2">
                <span className="w-16 border-[1px]  border-secondColor  "></span>
                <p className="text-textColor text-lg  uppercase">
                  GROWING WITH OUR CLIENTS
                </p>
              </div>
              <div className="flex flex-col gap-1 text-4xl font-extrabold font-Sarabun capitalize">
                <span className="text-mainColor">30 Years of</span>
                <span className="text-secondColor">Experience</span>
              </div>
              <div className=" flex flex-col gap-4 md:flex-row">
                <p className=" ">
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
                <p className=" ">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition. Organically grow the holistic world view of
                  disruptive innovation diversity.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
              {/* card */}
              <div className="">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="  relative flex  justify-center items-center  ">
                    <svg
                      viewBox="0 0 100 100"
                      style={{ display: "block", width: "100%" }}
                    >
                      <path
                        d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96"
                        stroke="#f5f5f5"
                        stroke-width="4"
                        fill-opacity="0"
                      ></path>
                      <path
                        d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96"
                        stroke="rgb(233,77,101)"
                        stroke-width="4"
                        fill-opacity="0"
                        style={{
                          strokeDasharray: "301.635, 301.635 ",
                          strokeDashoffset: 12.0654,
                        }}
                      ></path>
                    </svg>
                    <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      <FaSortAmountUp className="text-9xl text-gray-400 md:text-7xl" />
                    </div>
                  </div>

                  <span className="text-mainColor text-center text-xl font-sans font-bold capitalize">
                    Consistency
                  </span>
                  <p className="text-center">
                    Podcasting operational change management inside of workflow.
                  </p>
                </div>
              </div>
              {/* card */}
              <div className="">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="  relative flex  justify-center items-center  ">
                    <svg
                      viewBox="0 0 100 100"
                      style={{ display: "block", width: "100%" }}
                    >
                      <path
                        d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96"
                        stroke="#f5f5f5"
                        stroke-width="4"
                        fill-opacity="0"
                      ></path>
                      <path
                        d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96"
                        stroke="rgb(233,77,101)"
                        stroke-width="4"
                        fill-opacity="0"
                        style={{
                          strokeDasharray: "301.635, 301.635 ",
                          strokeDashoffset: 12.0654,
                        }}
                      ></path>
                    </svg>
                    <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      <CgSandClock className="text-9xl text-gray-400 md:text-7xl" />
                    </div>
                  </div>

                  <span className="text-mainColor text-center text-xl font-sans font-bold capitalize">
                    Branching
                  </span>
                  <p className="text-center">
                    Pursue scalable customer service through sustainable
                    potentialities.{" "}
                  </p>
                </div>
              </div>
              {/* card */}
              <div className="">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <div className="  relative flex  justify-center items-center  ">
                    <svg
                      viewBox="0 0 100 100"
                      style={{ display: "block", width: "100%" }}
                    >
                      <path
                        d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96"
                        stroke="#f5f5f5"
                        stroke-width="4"
                        fill-opacity="0"
                      ></path>
                      <path
                        d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96"
                        stroke="rgb(233,77,101)"
                        stroke-width="4"
                        fill-opacity="0"
                        style={{
                          strokeDasharray: "301.635, 301.635 ",
                          strokeDashoffset: 12.0654,
                        }}
                      ></path>
                    </svg>
                    <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                      <PiGlobeLight className="text-9xl text-gray-400 md:text-7xl" />
                    </div>
                  </div>

                  <span className="text-mainColor text-center text-xl font-sans font-bold capitalize">
                    Improvement
                  </span>
                  <p className="text-center">
                    Podcasting operational change management inside of workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
