import React from "react";

export default function page() {
  return (
    <div>
      <div className="mt-16 w-full flex-col  max-h-[950px] lg:max-h-[1050px] xl:max-h-[1150px]">
        <img src="/aboutImg.svg" className="w-full hidden lg:block" alt="" />
        <img src="/aboutImg2.svg" className="w-full block lg:hidden" alt="" />
      </div>
      <div className="w-full min-h-[500px] flex flex-col lg:flex-row  mt-10">
        <div className="w-full lg:w-1/2 gap-4 min-h-[400px] flex">
          <div className="hidden lg:flex lg:w-1/3"></div>
          <div className="w-full lg:w-2/3">
            <p className="text-[#000] lg:text-[44px]">درباره ما</p>
            <span className="bg-white rounded-xl text-[#000] text-base py-1 px-5 block">
              دکتر آسپرین مکان یاب سلامت مربوط به خدمات درمان و پزشکی برای
              ایرانیان است که با برنامه‌ریزی و مطالعه درست ، تصمیم دارد مرهم درد
              کاربران باشد. مجموعه “ دکتر آسپرین ” با داشتن پزشکان و متخصصان که
              همه روزه در خدمت بیماران هستند زندگی، امید، عشق و سلامتی را برای
              تمامی هموطنان حتی در دورترین نقطه کشور به ارمغان می‌‌آورد تا
              بتواند با این کار نفس زندگی را تازه کنددکتر آسپرین مکان یاب سلامت
              مربوط به خدمات درمان و پزشکی برای ایرانیان است که با برنامه‌ریزی و
              مطالعه درست ، تصمیم دارد مرهم درد کاربران باشد. مجموعه “ دکتر
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 gap-4 min-h-[400px] flex flex-col items-center justify-start">
            <div className="relative   bg-white  rounded-xl shadow-lg w-[250px] md:w-[305px] h-[88px] mt-12 flex flex-col items-center justify-center gap-4">
                <div className="flex items-center justify-around">
                    <span className="text-[#000] text-base px-2">021-2652122</span>
                    <span className="text-[#000] text-base px-2">021-2652122</span>
                </div>
                <div className="flex items-center justify-around">
                    <span className="text-[#000] text-base px-2">021-2652122</span>
                    <span className="text-[#000] text-base px-2">021-2652122</span>
                </div>
                <img src="/phoneAbout.svg" className="absolute right-[-50px]" alt="" />
            </div>
            <div className="relative ml-5 bg-white  rounded-xl shadow-lg w-[250px] md:w-[305px] h-[88px] mt-5 flex flex-col items-center justify-center gap-4">
                <div className="text-start">
                    <span className="text-[#000] text-base pl-1 pr-12 block">
                    ایران - تهران  -  شهریار - بندری - کوچه مقصر -  پلاک به تو چه 
                    </span>
                    
                </div>
               
                <img src="/locAbout.svg" className="absolute right-[-55px]" alt="" />
            </div>
            <div>

            </div>
        </div>
      </div>
    </div>
  );
}

