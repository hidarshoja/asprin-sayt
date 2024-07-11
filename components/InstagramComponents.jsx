import React from "react";

export default function InstagramComponents() {
  return (
    <div>
      <div className="relative mx-auto mt-48 h-[369px] w-[90%] rounded-lg bg-[#2171E8] p-4 bg-[url('/Group10.png')] bg-no-repeat bg-center lg:flex lg:flex-row flex flex-col">
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
            <img src="/flash.svg" className="w-[39px] h-[79px] pt-6 opacity-60" alt="" />
            <div></div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-end items-end relative">
          <div className="absolute bottom-[-16px] rounded-t-3xl shadow-lg ">
            <img
              src="/mobile1.png"
              alt="Instagram Screenshot"
              className="rounded-t-2xl w-[300px] h-[474px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
