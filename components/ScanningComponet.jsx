import React from "react";

export default function ScanningComponent() {
  return (
    <>
    <div className="flex flex-col bg-[#F5F5F5] py-4   lg:hidden">
         <div className="relative w-full">
          <img src="/petr.svg" className="w-[68px] h-[67px] absolute top-[-10px] right-[-10px]" alt="" />
          <img src="/girlH-m.svg" className="w-[90%] mx-auto" alt="" />
         </div>
         <div className="w-full p-8">
        <p className="text-center lg:text-start text-[14px] lg:text-[30px] text-[#35383f] font-bold mb-4">
          <span className="text-[#2171e8]">پویش</span> حمایت های مردمی
        </p>
        <span className="text-[12px] lg:text-[18px] text-[#616161] leading-8 text-justify font-medium">
          دکتر آسپرین مکان یاب سلامت مربوط به خدمات درمان و پزشکی برای ایرانیان
          است که با برنامه‌ریزی و مطالعه درست، تصمیم دارد <span className="font-bold">مرهم درد کاربران</span> باشد.
          مجموعه دکتر آسپرین با داشتن پزشکان و متخصصان که همه روزه در خدمت
          بیماران هستند زندگی، امید، عشق و سلامتی را برای تمامی هموطنان حتی در
          دورترین نقطه کشور به ارمغان می‌آورد تا بتواند با این کار نفس زندگی را
          تازه کند. تا به امروز بیش از 2000 نوزاد بیمار در روستاها با کمک شما
          عزیزان درمان شدند. با هر مبلغی می‌توانید به این حمایت‌های مردمی ما
          بپیوندید.
        </span>
        <div className="flex items-center justify-center relative lg:justify-between mt-4 lg:mt-12">
          <div>
            <button className="flex w-[197px] h-14 justify-center items-center rounded-xl bg-[#247cff] text-white text-base font-medium">
              بیشتر بدانید
            </button>
          </div>
          <div className="absolute lg:relative left-[-10px] top-[-70px]">
            <img
              src="/flash.svg"
              className="w-[51px] h-[103px] fill-[#eee]"
              alt="12"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="hidden w-full h-[635px]  lg:flex items-center flex-col lg:flex-row bg-[#f5f5f5] mt-28 relative overflow-hidden">
      <img
        src="/Group.svg"
        className="w-[107px] h-[104px] absolute top-0 right-0"
        alt=""
      />
      <div className="w-full lg:w-1/2 p-8 lg:p-16 mr-[6%]">
        <p className="texxt-[14px] lg:text-[30px] text-[#35383f] font-bold mb-4">
          <span className="text-[#2171e8]">پویش</span> حمایت های مردمی
        </p>
        <span className="text-[12px] lg:text-[18px] text-[#616161] leading-8 text-justify font-medium">
          دکتر آسپرین مکان یاب سلامت مربوط به خدمات درمان و پزشکی برای ایرانیان
          است که با برنامه‌ریزی و مطالعه درست، تصمیم دارد <span className="font-bold">مرهم درد کاربران</span> باشد.
          مجموعه دکتر آسپرین با داشتن پزشکان و متخصصان که همه روزه در خدمت
          بیماران هستند زندگی، امید، عشق و سلامتی را برای تمامی هموطنان حتی در
          دورترین نقطه کشور به ارمغان می‌آورد تا بتواند با این کار نفس زندگی را
          تازه کند. تا به امروز بیش از 2000 نوزاد بیمار در روستاها با کمک شما
          عزیزان درمان شدند. با هر مبلغی می‌توانید به این حمایت‌های مردمی ما
          بپیوندید.
        </span>
        <div className="flex items-center justify-between mt-12">
          <div>
            <button className="flex w-[197px] h-14 justify-center items-center rounded-xl bg-[#247cff] text-white text-base font-medium">
              بیشتر بدانید
            </button>
          </div>
          <div>
            <img
              src="/flash.svg"
              className="w-[51px] h-[103px] fill-[#eee]"
              alt="12"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 flex justify-center items-center p-8 lg:p-16">
        <img
          src="/gril.svg"
          className="absolute lg:static right-0 top-0 lg:relative lg:h-[531px] lg:right-0"
          alt=""
        />
        <img
          src="/home.svg"
          className="absolute lg:static left-0 top-0 lg:relative lg:h-[457px] lg:left-0"
          alt=""
        />
      </div>
    </div>
    </>
  );
}
