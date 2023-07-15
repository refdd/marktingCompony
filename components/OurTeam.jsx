import React from "react";
import quotes from "../public/assets/bgn-quotes.jpg";
import tame1 from "../public/assets/img-quote-01.jpg";
import tame2 from "../public/assets/img-quote-02.jpg";
import tame3 from "../public/assets/img-quote-03.jpg";
import puotestop from "../public/assets/bgn-quotes-top.png";
import puotesBottom from "../public/assets/bgn-quotes-bottom.png";
import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";
function OurTeam() {
  return (
    <div
      style={{ backgroundImage: `url(${quotes.src})` }}
      className=" relative bg-no-repeat bg-cover bg-center py-20"
    >
      <div
        style={{ backgroundImage: `url(${puotesBottom.src})` }}
        className="absolute bottom-0 left-0 w-full h-[69px] z-10 "
      ></div>
      <div
        style={{ backgroundImage: `url(${puotestop.src})` }}
        className="absolute top-0 left-0 w-full h-[156px] z-10 "
      ></div>
      <div className="container mx-auto px-4">
        <div className=" py-20">
          <div className=" relative flex flex-col gap-4 px-4">
            <div className="flex items-center gap-2">
              <span className="w-16 border-[1px]  border-secondColor  "></span>
              <p className="text-white text-lg  uppercase">
                GREAT REVIEWS FOR OUR SERVICES
              </p>
            </div>
            <div className="flex flex-col gap-1 text-4xl font-extrabold font-Sarabun capitalize">
              <span className="text-white">Trusted by some</span>
              <span className="text-secondColor">Experience</span>
            </div>
          </div>
          <div className="grid grid-col-1 gap-5 mt-8 px-4 md:grid-cols-3">
            {/* card */}
            <div className="">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="relative w-[200px] h-[200px] rounded-full">
                  <Image
                    src={tame1}
                    fill
                    loading="lazy"
                    alt="team"
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-xl text-secondColor font-Sarabun capitalize font-semibold">
                  Absolutely spot-on!
                </p>
                <p className="text-white text-center">
                  Seamlessly visualize quality intellectual capital without
                  superior collaboration and idea-sharing. Holistically
                  pontificate installed base portals.
                </p>
                <div className="flex items-center gap-1 ">
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                </div>
                <p className="text-white text-center font-sans -mt-1">
                  JAMES BRISK
                </p>
                <p className="text-white text-2xl text-center font-bold capitalize font-Sarabun -mt-1">
                  HSBC Bank
                </p>
              </div>
            </div>
            {/* card */}
            <div className="">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="relative w-[200px] h-[200px] rounded-full">
                  <Image
                    src={tame2}
                    fill
                    loading="lazy"
                    alt="team"
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-xl text-secondColor font-Sarabun capitalize font-semibold">
                  Saved my Business
                </p>
                <p className="text-white text-center">
                  Dynamically target high-payoff intellectual capital for
                  customized technologies. Objectively integrate emerging core
                  competency communities.
                </p>
                <div className="flex items-center gap-1 ">
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                </div>
                <p className="text-white text-center font-sans -mt-1">
                  MARIA GOTHENBURG
                </p>
                <p className="text-white text-2xl text-center font-bold capitalize font-Sarabun -mt-1">
                  Applauz Startup
                </p>
              </div>
            </div>
            {/* card */}
            <div className="">
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="relative w-[200px] h-[200px] rounded-full">
                  <Image
                    src={tame3}
                    fill
                    loading="lazy"
                    alt="team"
                    className="rounded-full object-cover"
                  />
                </div>
                <p className="text-xl text-secondColor font-Sarabun capitalize font-semibold">
                  Absolutely spot-on!
                </p>
                <p className="text-white text-center">
                  Quickly deploy strategic networks with compelling e-business.
                  Credibly pontificate highly efficient manufactured products
                  and enabled data.
                </p>
                <div className="flex items-center gap-1 ">
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                  <BsFillStarFill className=" text-secondColor" />
                </div>
                <p className="text-white text-center font-sans -mt-1">
                  HOWARD MCMILLAN
                </p>
                <p className="text-white text-2xl text-center font-bold capitalize font-Sarabun -mt-1">
                  Hotel Berg
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
