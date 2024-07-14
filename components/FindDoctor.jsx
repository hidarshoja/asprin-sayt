"use client";

import React, { useState } from "react";
import FindDoctorBox from "./FindDoctorBox";

export default function FindDoctor() {
  const [activeIndex, setActiveIndex] = useState(4);
  const [activeSpanIndex, setActiveSpanIndex] = useState(1);
  
  const buttonSets = [
    [
      "دکتر بیماری کودکان",
      "دکتر آلرژی",
      "دکتر تغذیه",
      "دکتر غدد",
      "دکتر روانشناس",
      "دکتر قلب",
      "دکتر پوست",
      "دکتر چشم",
      "دکتر گوش",
    ],
    [
      "دکتر حلق",
      "دکتر مغز و اعصاب",
      "دکتر ریه",
      "دکتر کبد",
      "دکتر کلیه",
      "دکتر استخوان",
      "دکتر دندان",
      "دکتر جراح",
      "دکتر عفونی",
    ],
    [
      "دکتر اورولوژی",
      "دکتر زنان",
      "دکتر ارتوپدی",
      "دکتر چشم پزشکی",
      "دکتر غدد درون ریز",
      "دکتر بیماری های عفونی",
      "دکتر بیماری های پوستی",
      "دکتر گوش و حلق و بینی",
      "دکتر قلب و عروق",
    ],
  ];

  const buttons = activeSpanIndex !== null ? buttonSets[activeSpanIndex] : [];

  return (
    <div className="w-full  py-10 bg-white rtl">
      <div>
        <div className="flex  items-center justify-between mt-20 py-8">
          <div className="text-[#35383f] text-[16px] lg:text-[30px] font-bold">
            پیدا کردن دکتر با نوع بیماری
          </div>
          <div className="flex items-center gap-3 text-[#247CFF] text-[10px] lg:text-[16px] font-medium">
            <span>مشاهده لیست دکترها</span>
            <span>
              <img src="/arrow.svg" alt="" />
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2 bg-[#2171e8] rounded-2xl relative h-[325px]">
            <div className="w-full lg:absolute lg:top-[55px] lg:right-12 bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col lg:flex-row items-center gap-1 justify-between mb-4">
                <div className="w-full lg:w-1/2 flex items-center">
                <img src="/search.svg" alt="search icon" />
                <input
                  type="text"
                  placeholder="جستجوی شهر"
                  className="w-full p-2 text-[12px] lg:text-[16px] outline-none rounded border-none"
                />
                </div>
                <select className="w-full lg:w-1/2 p-2 border rounded mr-2 text-[#9e9e9e] text-[12px] lg:text-[16px] border-none font-normal outline-none">
                  <option value="" disabled selected>
                    جستجوی نوع بیماری
                  </option>
                  <option value="hair_loss">ریزش مو</option>
                  <option value="anemia">کم خونی</option>
                  <option value="diabetes">دیابت</option>
                  <option value="alzheimers">الزایمر</option>
                </select>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {buttons.map((label, index) => (
                  <button
                    key={index}
                    className={`custom-button text-[10px] lg:text-[14px] ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="w-full flex items-center justify-center gap-2 mt-6">
                {[0, 1, 2].map((index) => (
                  <span
                    key={index}
                    className={`w-[12px] h-[12px] rounded-full ${
                      activeSpanIndex === index
                        ? "bg-[#247CFF]"
                        : "bg-[#e0e0e0]"
                    }`}
                    onClick={() => setActiveSpanIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <FindDoctorBox />
          </div>
        </div>
      </div>
    </div>
  );
}
