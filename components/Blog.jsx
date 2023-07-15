import Image from "next/image";
import React from "react";
import blogImage from "../public/assets/blog-post-01-640x640.jpg";
import { FaAngleRight } from "react-icons/fa";
function Blog() {
  return (
    <div>
      <div className="container mx-auto px-4 mt-24">
        <div className=" relative flex flex-col gap-3 px-4">
          <div className="flex items-center gap-2">
            <span className="w-16 border-[1px]  border-secondColor  "></span>
            <p className="text-textColor text-sm  uppercase">
              GROWING WITH OUR CLIENTS
            </p>
          </div>
          <div className="flex flex-row gap-1 text-4xl font-extrabold font-Sarabun capitalize">
            <span className="text-mainColor">Latest </span>
            <span className="text-secondColor">News</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-7 mt-10 md:grid-cols-7">
          <div className="col-span-3">
            <div className="relative w-full h-[320px] overflow-hidden">
              <Image
                src={blogImage}
                fill
                loading="lazy"
                alt="blog"
                className="object-cover"
              />
              <div class="absolute top-0 right-[-1px] w-[9em] h-[6em] bg-white transform skew-y-[37deg] origin-top-right z-10"></div>
              <div class="absolute top-0 right-[0px]  transform skew-y-[0]  z-20 flex flex-col justify-center items-center">
                <span className="text-textColor text-3xl font-bold ">4</span>
                <span className="text-textColor text-2xl font-bold uppercase ">
                  apr
                </span>
              </div>

              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000d6] to-gray-[#44444400]"></div>
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <div className=" relative flex flex-col gap-2 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 border-[1px]  border-secondColor  "></span>
                    <p className="text-white text-sm uppercase hover:text-gray-400 transition-all cursor-pointer">
                      NEWS
                    </p>
                    <p className="text-white text-sm uppercase hover:text-gray-400 transition-all cursor-pointer">
                      PROJECTS
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-2xl font-extrabold font-Sarabun capitalize">
                    <span className="text-white">Consulting Project</span>
                  </div>
                  <div className="">
                    <p className="text-sm font-medium text-white   leading-6 ">
                      Dynamically target high-payoff intellectual capital for
                      customized technologies. Objectively integrate emerging
                      core competencies before process-centric communities.
                      Dramatically evisculate holistic innovation
                    </p>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <div className=" group  flex justify-center items-center gap-2  ">
                      <span className="  cursor-pointer text-secondColor text-sm font-Sarabun capitalize font-semibold group-hover:text-white transition-all">
                        Read more
                      </span>
                      <FaAngleRight className=" text-secondColor text-sm  group-hover:text-white " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative w-full h-[320px] overflow-hidden">
              <div class="absolute top-0 right-[-1px] w-[9em] h-[6em] bg-white transform skew-y-[37deg] origin-top-right z-10"></div>
              <div class="absolute top-0 right-[0px]  transform skew-y-[0]  z-20 flex flex-col justify-center items-center">
                <span className="text-textColor text-3xl font-bold ">19</span>
                <span className="text-textColor text-2xl font-bold uppercase ">
                  apr
                </span>
              </div>

              <div className="absolute top-0 left-0 w-full h-full bg-[#f5f5f5]"></div>
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <div className=" relative flex flex-col gap-2 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 border-[1px]  border-textColor  "></span>
                    <p className="text-textColor text-sm  uppercase hover:text-gray-400 transition-all cursor-pointer">
                      NEWS
                    </p>
                    <p className="text-textColor text-sm  uppercase hover:text-gray-400 transition-all cursor-pointer">
                      PROJECTS{" "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-2xl font-extrabold font-Sarabun capitalize">
                    <span className="text-secondColor">Management Project</span>
                  </div>
                  <div className="">
                    <p className="text-sm font-medium text-textColor   leading-6 ">
                      Dynamically target high-payoff intellectual capital for
                      customized technologies. Objectively integrate emerging
                      core competencies before process-centric communities.
                      Dramatically evisculate holistic innovation
                    </p>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <div className=" group  flex justify-center items-center gap-2  ">
                      <span className="  cursor-pointer text-secondColor text-sm font-Sarabun capitalize font-semibold group-hover:text-textColor transition-all">
                        Read more
                      </span>
                      <FaAngleRight className=" text-secondColor text-sm  group-hover:text-textColor " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="relative w-full h-[320px] overflow-hidden">
              <div class="absolute top-0 right-[-1px] w-[9em] h-[6em] bg-white transform skew-y-[37deg] origin-top-right z-10"></div>
              <div class="absolute top-0 right-[0px]  transform skew-y-[0]  z-20 flex flex-col justify-center items-center">
                <span className="text-textColor text-3xl font-bold ">4</span>
                <span className="text-textColor text-2xl font-bold uppercase ">
                  apr
                </span>
              </div>

              <div className="absolute top-0 left-0 w-full h-full bg-[#f5f5f5]"></div>
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <div className=" relative flex flex-col gap-2 px-4">
                  <div className="flex items-center gap-2">
                    <span className="w-7 border-[1px]  border-textColor  "></span>
                    <p className="text-textColor text-sm  uppercase hover:text-gray-400 transition-all cursor-pointer">
                      NEWS
                    </p>
                    <p className="text-textColor text-sm  uppercase hover:text-gray-400 transition-all cursor-pointer">
                      PROJECTS
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-2xl font-extrabold font-Sarabun capitalize">
                    <span className="text-secondColor">Consulting Project</span>
                  </div>
                  <div className="">
                    <p className="text-sm font-medium text-textColor   leading-6 ">
                      Dynamically target high-payoff intellectual capital for
                      customized technologies. Objectively integrate emerging
                      core competencies before process-centric communities.
                      Dramatically evisculate holistic innovation
                    </p>
                  </div>
                  <div className="flex items-center gap-3 ">
                    <div className=" group  flex justify-center items-center gap-2  ">
                      <span className="  cursor-pointer text-secondColor text-sm font-Sarabun capitalize font-semibold group-hover:text-textColor transition-all">
                        Read more
                      </span>
                      <FaAngleRight className=" text-secondColor text-sm  group-hover:text-textColor " />
                    </div>
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

export default Blog;
