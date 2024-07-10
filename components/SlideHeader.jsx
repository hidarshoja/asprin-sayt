import React from "react";

export default function SlideHeader() {
  return (
    <div className="bg-[url('/back-m.jpg')] bg-auto bg-no-repeat bg-center w-full min-h-[406px] lg:min-h-[742px] flex items-start  flex-col relative">
      <div className="text-[#35383f] text-[16px] lg:text-[40px] font-IRANSans font-bold lg:font-black w-full flex flex-col items-center justify-center mt-[52px] lg:mt-[115px]">
        <div className="flex relative">
            <img src="/doctor1.svg" 
            className="absolute h-5 w-5 lg:w-[71px] right-[-10px] bottom-[-55px] lg:h-[61px] lg:right-[-230px] lg:bottom-[-90px] " alt="" />
            <img src="/border1.svg" 
            className="absolute w-[78px] h-[31px] lg:h-[104px] lg:w-[256px] bottom-[-55px] right-[-10px] lg:right-[-195px] lg:bottom-[-100px]  " alt="" />
          <span className="px-1">با</span>
          <span className="text-[#2171e8] font-IRANSans font-bold lg:font-black text-[16px] lg:text-[40px] px-1">
            دکتر آسپرین{" "}
          </span>
          <span>به راحتی نوبت خود را رزرو کنید</span>
          <img
            src="/imgheader.svg"
            className="w-[19px] lg:w-[38px] h-[13px] lg:h-[31px] absolute left-[-15px] lg:left-[-40px] top-[-10px] lg:top-[-6px]"
            alt=""
          />
        </div>
        <span>بهترین خدمات پزشکی در دستان شما</span>
      </div>
      <div className="absolute bottom-[-70px] lg:relative w-full flex flex-col items-center mt-20 justify-center">
        <div className="flex">
          <button className="w-[110px] lg:w-[238px] lg:py-4 lg:px-7 flex items-center justify-center rounded-tr-xl border-l border-[#9e9e9e]  bg-white  text-[14px] lg:text-[16px] font-medium font-IRANSans text-[#9e9e9e]">
            رزرو نوبت
          </button>
          <button className="w-[110px] lg:w-[238px] py-4 px-7 flex items-center justify-center rounded-tl-xl bg-white   text-[14px] lg:text-[16px] font-medium font-IRANSans text-[#9e9e9e]">
            خدمات
          </button>
        </div>
        <div className="flex bg-white shadow-2xl border border-[#e4ecfc78] gap-5 shadow-[#bfd1f578]  w-[80%] lg:w-60%] my-auto flex-col lg:flex-row py-7 px-4 rounded-2xl">
          <div className="w-full lg:w-2/5">
            <div>
              <div className="relative mt-2 flex items-center">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="جستجوی نام دکتر و تخصص"
                  className="block w-full rounded-md border border-[#e0e0e0] py-[11px] pr-12 bg-white text-[#9E9E9E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <img
                    src="/search.svg"
                    className="w-6 h-6 mt-1 cursor-pointer"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="relative mt-2">
              <select
                className="block w-full rounded-md border border-[#e0e0e0] py-[9px] px-2 bg-white text-[#9E9E9E]  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                defaultValue=""
              >
                <option value="" disabled>
                  انتخاب شهر
                </option>
                <option value="specialty1">شهر اول</option>
                <option value="specialty2">شهر دوم</option>
                <option value="specialty3">شهر سوم</option>
              </select>
            </div>
          </div>

          <div className="w-full lg:w-1/5">
            <div className="mt-2">
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-[9px] px-4 rounded flex items-center justify-center gap-2">
                <img
                  src="/search2.svg"
                  className=" w-6 h-6 mt-1 text-white cursor-pointer"
                  alt=""
                />
                <span>جستجو</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
