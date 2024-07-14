import React from "react";

export default function InstagramComponents() {
  return (
    <div>
      <div className="hidden relative mx-auto lg:mt-20  h-[369px]  bg-[#2171E8] p-4 bg-[url('/Group10.png')] bg-cover rounded-t-3xl bg-no-repeat bg-center lg:flex lg:flex-row  flex-col">
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-4 text-center lg:text-right">
          <h2 className="text-[24px] font-bold mb-2 mt-12 mr-12 text-white">
            صفحه رسمی ما را در اینستاگرام دنبال کنید
          </h2>
          <p className="text-[20px] font-normal text-justify mr-12 mt-3 text-[#eee] mb-4">
            به صفحه رسمی اینستاگرام ما بپیوندید و از جدیدترین اخبار، تخفیف‌ها و
            مقالات بهداشتی و درمانی باخبر شوید! با دنبال کردن ما در اینستاگرام،
            می‌توانید از تجربیات و نظرات دیگر کاربران بهره‌مند شوید و از خدمات
            ویژه ما مطلع گردید.
          </p>
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-white text-[#247cff] rounded-lg  flex items-center gap-1 text-[16px] font-medium mr-12 mt-10">
              <span>
                <img src="/instagram.svg" alt="" />
              </span>
              <span>رفتن به اینستاگرام</span>
            </button>
            <img
              src="/flash.svg"
              className="w-[39px] h-[79px] pt-6 opacity-60"
              alt=""
            />
            <div></div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end items-end relative">
          <div className="absolute lg:bottom-[-16px] lg:rounded-t-3xl shadow-lg ">
            <img
              src="/mobile1.png"
              alt="Instagram Screenshot"
              className="hidden lg:block rounded-t-2xl p-0 ml-28 w-[300px] h-[474px] "
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden p-[18px]">
      <div className="lg:hidden rounded-t-3xl  mt-24 mx-auto bg-[#2171e8] h-[573px] relative flex items-center justify-center flex-col gap-3 bg-[url('/Frame1.svg')] bg-no-repeat bg-cover">
        <div className="relative w-full flex justify-center h-[50%]">
          <img
            src="/mobile-i.svg"
            className="absolute z-50 top-[-80px] w-[147px] h-[302px]"
            alt=""
          />
        </div>
        <div className="px-4 py-1 h-[50%]">
          <p className="text-white text-[14px] font-bold text-center">
            صفحه رسمی ما را در اینستاگرام دنبال کنید
          </p>
          <span className="text-[#eee] text-[12px] font-normal text-justify">
            به صفحه رسمی اینستاگرام ما بپیوندید و از جدیدترین اخبار، تخفیف‌ها و
            مقالات بهداشتی و درمانی باخبر شوید! با دنبال کردن ما در اینستاگرام،
            می‌توانید از تجربه‌ها و نظرات دیگر کاربران بهره‌مند شوید و از خدمات
            ویژه ما مطلع گردید.
          </span>
          <div className="w-full flex items-center justify-end">
            <img src="/flash.svg" className="w-[17px] h-[36px]" alt="" />
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="px-4 py-2 bg-white text-[#247cff] rounded-lg flex items-center gap-1 text-[16px] font-medium mt-10">
              <span>
                <img src="/instagram.svg" alt="" />
              </span>
              <span>رفتن به اینستاگرام</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
