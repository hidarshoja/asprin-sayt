import React from "react";
import "./login.css";

export default function page() {
  return (
    <>
      <div className="hidden  loginDiv md:flex justify-start items-center  min-h-screen">
        <div className="w-1/3 flex items-center justify-center">
          <div className="w-[250px] h-[250px] rounded-lg bg-white flex items-center  flex-col">
            <h3 className="text-colorText text-[21.5px] font-[400px] mt-[31px]">
              دکتر آسپرین
            </h3>
            <span className="text-colorText text-sm font-[400px] mt-2">
              مکان یاب سلامت
            </span>
            <div
              className="flex  w-[190px] mx-auto rounded-md border border-1 border-[#304958 bg-white] h-10 overflow-hidden mt-6"
              dir="ltr"
            >
              <div className="w-1/5 border-r-2 flex items-center justify-center text-colorText text-[12px]">
                +98
              </div>
              <input
                type="text"
                placeholder="9122712416"
                className="text-[#B4B4B4] text-[12px] px-1 w-4/5 outline-none"
              />
            </div>
            <div className="w-full mt-9">
              <button className="rounded-md bg-colorText shadow-lg text-white text-[13px] font-normal w-[77%] mx-auto flex items-center justify-center px-4 py-3">
              ورود/عضویت خدمات دهندگان
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/3 h-screen"></div>
      </div>

      <div className="mobileLogin flex md:hidden justify-center items-center  min-h-screen">
      <div className="w-[250px] h-[250px] rounded-lg bg-white flex items-center  flex-col">
            <h3 className="text-colorText text-[21.5px] font-[400px] mt-[31px]">
              دکتر آسپرین
            </h3>
            <span className="text-colorText text-sm font-[400px] mt-2">
              مکان یاب سلامت
            </span>
            <div
              className="flex  w-[190px] mx-auto rounded-md border border-1 border-[#304958 bg-white] h-10 overflow-hidden mt-6"
              dir="ltr"
            >
              <div className="w-1/5 border-r-2 flex items-center justify-center text-colorText text-[12px]">
                +98
              </div>
              <input
                type="text"
                placeholder="9122712416"
                className="text-[#B4B4B4] text-[12px] px-1 w-4/5 outline-none"
              />
            </div>
            <div className="w-full mt-9">
              <button className="rounded-md bg-colorText shadow-lg text-white text-[13px] font-normal w-[77%] mx-auto flex items-center justify-center px-4 py-3">
              ورود/عضویت خدمات دهندگان
              </button>
            </div>
          </div>
      </div>
    </>
  );
}
