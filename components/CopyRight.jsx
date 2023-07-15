import React from "react";

function CopyRight() {
  return (
    <div className="bg-secondColor py-5">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1  gap-5 md:grid-cols-3">
          <div className=" md:col-span-1">
            <p className="text-sm text-white capitalize ">
              Copyright by <span className="font-semibold">BoldThemes</span>.
              All rights reserved.{" "}
            </p>
          </div>
          <div className="md:col-span-2">
            <ul className="flex items-center justify-center gap-4 flex-wrap">
              <li className="text-white uppercase text-sm font-Sarabun hover:text-gray-200 cursor-pointer">
                <span>Home</span>
              </li>
              <li className="text-white uppercase text-sm font-Sarabun hover:text-gray-200 cursor-pointer">
                <span>about us</span>
              </li>
              <li className="text-white uppercase text-sm font-Sarabun hover:text-gray-200 cursor-pointer">
                <span>server</span>
              </li>
              <li className="text-white uppercase text-sm font-Sarabun hover:text-gray-200 cursor-pointer">
                <span>portfolio </span>
              </li>
              <li className="text-white uppercase text-sm font-Sarabun hover:text-gray-200 cursor-pointer">
                <span>blog</span>
              </li>
              <li className="text-white uppercase text-sm font-Sarabun hover:text-gray-200 cursor-pointer">
                <span>shop</span>
              </li>
              <li className="text-white uppercase text-sm font-Sarabun hover:text-gray-200 cursor-pointer">
                <span>back to Top</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopyRight;
