"use clinet";

import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";
export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] text-gray-600 lg:pt-8 ">
      <div className="container mx-auto px-4">
        <div className="mb-6 py-6 flex flex-col items-center lg:px-10 border-b border-[#e0e0e0]">
          <div className="flex items-center justify-between w-full">
            <div className="hidden lg:block"></div>
            <div className="flex items-center gap-2">
              <img
                src="/logo2.svg"
                className="w-6 h-6 lg:w-12 lg:h-12"
                alt=""
              />
              <h3 className="text-[14px] text-[#35383f] lg:text-[24px] font-bold">
                دکتر آسپرین
              </h3>
            </div>
            <div>
              <ScrollToTopButton />
            </div>
          </div>
          <p className="text-[10px] lg:text-[18px] font-normal text-justify mt-8 text-[#757575]">
            دکترتو ساده‌ترین راه نوبت‌ دهی اینترنتی و مشاوره آنلاین پزشکان ایران
            است. پزشکان به کمک دکترتو می‌توانند امکان نوبت دهی اینترنتی و مشاوره
            تلفنی خود را فعال کنند. به این ترتیب بیمار برای نوبت گیری از دکتر
            نیاز به روش‌های سنتی مثل تلفن زدن یا مراجعه حضوری ندارد.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between lg:px-20">
          <div className="md:flex md:flex-1 justify-between gap-3">
            <div className="flex w-full lg:w-3/6 justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="text-[10px] lg:text-[20px] text-[#35383F] font-medium mb-2">
                  صفحات سایت
                </h4>
                <ul className="space-y-1 text-[10px] lg:text-[18px]">
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      صفحه اصلی
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      نوبت دهی
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      خدمات
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      درباره ما
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      پوشش
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-6 md:mb-0">
                <h4 className="text-[10px] lg:text-[20px] text-[#35383F] font-medium mb-2">
                  تخصص‌های پر بازدید
                </h4>
                <ul className="space-y-1 text-[10px] lg:text-[18px]">
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      متخصص مغز و اعصاب
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      متخصص پوست و مو
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      دکتر دندان پزشک
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      دکتر چشم پزشک
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      متخصص کودکان
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-6 md:mb-0">
                <h4 className="text-[10px] lg:text-[20px] text-[#35383F] font-medium mb-2">
                  بیماری‌های شایع
                </h4>
                <ul className="space-y-1 text-[10px] lg:text-[18px]">
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      غدد درون ریز
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      گوارش و کبد
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      قلب و عروق
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      نفروپاتی
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      نورولوژی
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex w-full lg:w-3/6 justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="text-[10px] lg:text-[20px] text-[#35383F] font-medium mb-2">
                  دسترسی‌های سریع
                </h4>
                <ul className="mt-6 text-[10px] lg:text-[18px] flex flex-col gap-4">
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      عضویت / ورود
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      مشاهده تجربیات بیماران
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#757575]  font-normal py-1"
                    >
                      تماس با پشتیبانی
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-6 md:mb-0">
                <ul className="space-y-1 text-[10px] lg:text-[18px] mt-6 flex flex-col gap-4">
                  <li>
                    <a
                      href="#"
                      className="text-[#247cff] border border-[#247cff]  font-normal py-2 px-3 flex items-center justify-center rounded-lg"
                    >
                      عضویت / ورود
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#247cff] border border-[#247cff]  font-normal py-2 px-3 flex items-center justify-center rounded-lg"
                    >
                      مشاهده تجربیات بیماران
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#247cff] border border-[#247cff]  font-normal py-2 px-3 flex items-center justify-center rounded-lg"
                    >
                      تماس با پشتیبانی
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-[10px] lg:text-[16px] text-[#9E9E9E] mt-6 w-full bg-[#EEE] h-[62px] flex items-center justify-center">
        تمامی حقوق مادی و معنوی متعلق به دکترآسپیرین می‌باشد.
      </div>
    </footer>
  );
}
