import React from "react";

export default function Support() {
  return (
    <>
      <div className="hidden lg:flex items-center justify-center mr-12 w-full">
        <div className="flex flex-col items-center justify-around w-1/4">
          <img src="/Grou1.svg" className="w-[220px] h-[114px]" alt="" />
          <img src="/Grou2.svg" className="w-[220px] h-[114px]" alt="" />
        </div>
        <div className="w-2/4">
          <div className="w-full flex items-center justify-center">
            <span className="w-[136px] h-[23px] bg-[#f9e6be] rounded-lg flex items-center justify-center text-[#445464] text-[20px] ">
              حمایت شما
            </span>
          </div>
          <div className="flex items-center gap-1 justify-around">
            <div className="flex flex-col gap-3 items-center justify-around">
              <span className="text-colorText md:text-[60px] text-[85px] text-center">
                پویش
              </span>
              <span className="text-colorText md:text-[40px] text-[60px] text-center">
                دکتر آسپرین
              </span>
            </div>
            <div className="flex flex-col items-center justify-around gap-3 h-[270px]">
              <span className="text-colorText text-[50px] text-center">
                ویزیت رایگان
              </span>
              <span className="text-colorText text-[10px] w-[200px] mx-auto text-center">
                جنبشی برای سلامت جامعه دسترسی عادلارنه به خدمات پزشکی جنبشی برای
                سلامت جامعه دسترسی ع‍ادلانه به خدمات پزشکی
              </span>
              <span className="text-colorText text-[20px] w-[100%] flex items-center justify-center bg-[#fdcb44] rounded-2xl py-2">
                پیوستن به جنبش
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <img src="/chid.svg" alt="" />
        </div>
      </div>
      <div className="flex lg:hidden flex-col items-center justify-center w-full">
        <div className="w-full">
          <div className="w-full flex items-center justify-center">
            <span className="w-[136px] h-[23px] bg-[#f9e6be] rounded-lg flex items-center justify-center text-[#445464] text-[20px] ">
              حمایت شما
            </span>
          </div>
          <div className="flex flex-row-reverse items-center justify-center">
            <div className="flex w-1/2">
              <img src="/chid.svg" alt="" />
            </div>
            <div className="flex flex-col gap-3 items-center justify-around w-1/2">
              <span className="text-colorText text-[40px] md:text-[50px] text-center">
                پویش
              </span>
              <span className="text-colorText text-[30px] md:text-[40px]  text-center">
                دکتر آسپرین
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-1 justify-around">
            <div className="flex flex-col items-center justify-around gap-3 h-[270px]">
              <span className="text-colorText text-[50px] text-center">
                ویزیت رایگان
              </span>
              <span className="text-colorText text-[10px] w-[200px] mx-auto text-center">
                جنبشی برای سلامت جامعه دسترسی عادلارنه به خدمات پزشکی جنبشی برای
                سلامت جامعه دسترسی ع‍ادلانه به خدمات پزشکی
              </span>
              <span className="text-colorText text-[20px] w-[100%] flex items-center justify-center bg-[#fdcb44] rounded-2xl py-2">
                پیوستن به جنبش
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <img src="/Grou1.svg" className="w-[220px] h-[114px]" alt="" />
          <img src="/Grou2.svg" className="w-[220px] h-[114px]" alt="" />
        </div>
      </div>
    </>
  );
}
