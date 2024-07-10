"use client";

import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

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
          <div className="w-full lg:w-1/2 bg-white px-6 py-11 rounded-lg shadow-md">
            <div className="flex items-start mb-4">
              <div className="w-1/4">
                <img
                  src="/021.png"
                  alt="doctor"
                  className="w-[91px] h-[91px] rounded-xl"
                />
              </div>
              <div className="w-2/4">
                <h3 className="text-[24px] text-[#212121] font-bold">
                  دکتر سپهر محمدی
                </h3>
                <p className="text-[16px] font-normal text-[#616161]">
                  متخصص بیماری های کودکان
                </p>
                <p className="text-[16px] text-[#9e9e9e] font-normal flex items-center gap-1">
                  <img src="/location.svg" className="w-5 h-5" alt="" />
                  <span>تهران، بیمارستان ابن سینا</span>
                </p>
              </div>
              <div className="flex items-end ml-12 justify-end gap-3 flex-col mt-2 w-1/4">
                <div className="flex gap-2 text-yellow-400">
                  <FaStarHalfAlt />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <button className="bg-[#2171e8] text-white text-[14px] py-1 px-8 rounded mr-4">
                  رزرو نوبت
                </button>
              </div>
            </div>
            <p className="text-[16px] text-[#757575] mb-4">
              <span className="text-[#424242]">آدرس مطب:</span> تهران، بلوار
              شهران شمالی، بالاتر از فلکه دوم شهران، بعد از مسجد امام علی،
              ساختمان داروخانه شبانه روزی دکتر کریمخان، طبقه اول، واحد 1
            </p>
            <p className="text-[#424242] text-[16px] font-medium text-right py-3">
              خدمات دکتر محمدی
            </p>
            <div className="flex gap-2">
              <span className="bg-[#fafafa] text-[#757575] text-[14px] font-normal py-1 px-2 rounded-[70px] border border-[#e0e0e0]">
                دکتر درمان کودکان
              </span>
              <span className="bg-[#fafafa] text-[#757575] text-[14px] font-normal py-1 px-2 rounded-[70px] border border-[#e0e0e0]">
                دکتر تغذیه
              </span>
              <span className="bg-[#fafafa] text-[#757575] text-[14px] font-normal py-1 px-2 rounded-[70px] border border-[#e0e0e0]">
                دکتر شنوایی سنجی
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
