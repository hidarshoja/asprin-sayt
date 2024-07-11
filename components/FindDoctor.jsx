"use client";

import React, { useState } from "react";
import FindDoctorBox from "./FindDoctorBox";

export default function FindDoctor() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSpanIndex, setActiveSpanIndex] = useState(1);
  //   const buttons = [
  //     "دکتر بیماری کودکان",
  //     "دکتر آلرژی",
  //     "دکتر تغذیه",
  //     "دکتر غدد",
  //     "دکتر روانشناس",
  //     "دکتر قلب",
  //     "دکتر پوست",
  //     "دکتر چشم",
  //     "دکتر گوش",
  //   ];
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
    <div className="w-full p-6 bg-[#f5f5f5] rtl">
      <div className="max-w-7xl mx-auto">
        <div className="flex  items-center justify-between mt-20 py-8">
          <div className="text-[#35383f] text-[16px] lg:text-[24px] font-bold">
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
          <div className="w-1/2 bg-[#2171e8] rounded-2xl relative">
            <div className="w-full absolute top-12 right-12 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-1 justify-between mb-4">
                <img src="/search.svg" alt="search icon" />
                <input
                  type="text"
                  placeholder="جستجوی شهر"
                  className="w-full p-2 outline-none rounded border-none"
                />
                <select className="w-full p-2 border rounded mr-2 text-[#9e9e9e] text-[16px] border-none font-normal outline-none">
                  <option value="" disabled selected>
                    جستجوی نوع بیماری
                  </option>
                  <option value="hair_loss">ریزش مو</option>
                  <option value="anemia">کم خونی</option>
                  <option value="diabetes">دیابت</option>
                  <option value="alzheimers">الزایمر</option>
                </select>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {buttons.map((label, index) => (
                  <button
                    key={index}
                    className={`custom-button ${
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
