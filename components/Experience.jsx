"use client";

import React, { useState } from "react";


const categories = [
  { name: "بیمارهای زنان", key: "women" },
  { name: "بیماری های ارتوپد", key: "ortho" },
  { name: "بیماری های غدد", key: "glands" },
  { name: "بیماری های کلیه", key: "kidney" },
  { name: "بیماری های چشم", key: "eye" },
  { name: "بیماری های تنفسی", key: "respiratory" },
];

const sections = [
  { name: "تشخیص", key: "diagnosis" },
  { name: "واکنش و احساسات", key: "reactions" },
  { name: "مراحل درمان", key: "treatment" },
  { name: "توصیه و تجربیات", key: "recommendations" },
  { name: "نتیجه گیری", key: "conclusion" },
];
export default function Experience() {
    const [activeCategory, setActiveCategory] = useState("women");
    const [activeSection, setActiveSection] = useState("recommendations");
  
    const renderContent = () => {
      switch (activeSection) {
        case "diagnosis":
          return (
            <div>
            
            <p>تغذیه مناسب: توجه به رژیم غذایی سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک زیادی به من کرد.</p>
            <p>حفظ روحیه: حفظ روحیه مثبت و متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.</p>
            <p>حمایت عاطفی: داشتن یک شبکه حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی و امید برای من بودند.</p>
            <p>فعالیت‌های روزانه: سعی کردم تا حد امکان به فعالیت‌های روزمره‌ام ادامه دهم. ورزش‌های سبک مانند یوگا و پیاده‌روی به من کمک کردند تا انرژی بیشتری داشته باشم.</p>
          </div>
          );
        case "reactions":
          return (
            <div>
                 <p>تغذیه مناسب: توجه به رژیم غذایی سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک زیادی به من کرد.</p>
            <p>حمایت عاطفی: داشتن یک شبکه حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی و امید برای من بودند.</p>
            <p>فعالیت‌های روزانه: سعی کردم تا حد امکان به فعالیت‌های روزمره‌ام ادامه دهم. ورزش‌های سبک مانند یوگا و پیاده‌روی به من کمک کردند تا انرژی بیشتری داشته باشم.</p>
           
            <p>حفظ روحیه: حفظ روحیه مثبت و متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.</p>
          </div>
          );
        case "treatment":
          return (
            <div>
                 <p>تغذیه مناسب: توجه به رژیم غذایی سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک زیادی به من کرد.</p>
            <p>حمایت عاطفی: داشتن یک شبکه حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی و امید برای من بودند.</p>
            <p>فعالیت‌های روزانه: سعی کردم تا حد امکان به فعالیت‌های روزمره‌ام ادامه دهم. ورزش‌های سبک مانند یوگا و پیاده‌روی به من کمک کردند تا انرژی بیشتری داشته باشم.</p>
           
            <p>حفظ روحیه: حفظ روحیه مثبت و متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.</p>
          </div>
          );
        case "recommendations":
          return (
            <div>
              <p>حمایت عاطفی: داشتن یک شبکه حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی و امید برای من بودند.</p>
              <p>فعالیت‌های روزانه: سعی کردم تا حد امکان به فعالیت‌های روزمره‌ام ادامه دهم. ورزش‌های سبک مانند یوگا و پیاده‌روی به من کمک کردند تا انرژی بیشتری داشته باشم.</p>
              <p>تغذیه مناسب: توجه به رژیم غذایی سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک زیادی به من کرد.</p>
              <p>حفظ روحیه: حفظ روحیه مثبت و متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.</p>
            </div>
          );
        case "conclusion":
            return (
                <div>
                  <p>حمایت عاطفی: داشتن یک شبکه حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی و امید برای من بودند.</p>
                  <p>فعالیت‌های روزانه: سعی کردم تا حد امکان به فعالیت‌های روزمره‌ام ادامه دهم. ورزش‌های سبک مانند یوگا و پیاده‌روی به من کمک کردند تا انرژی بیشتری داشته باشم.</p>
                  <p>تغذیه مناسب: توجه به رژیم غذایی سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک زیادی به من کرد.</p>
                  <p>حفظ روحیه: حفظ روحیه مثبت و متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.</p>
                 
                </div>
              )
        default:
          return <p>انتخاب کنید</p>;
      }
    };
  
    return (
      <div className="w-full bg-white h-[600px]">
        <div className="flex mt-32 items-center justify-between lg:px-20">
            <div className="w-1/3 text-[#35383f] text-[30px]   font-bold">
            داستان و تجربه بیماران
            </div>
            <div className="w-2/3">
            <div className="flex w-full items-center justify-end mb-4">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`px-4 py-2 text-[16px] font-medium mx-1 ${activeCategory === category.key ? "border-b-2 border-[#2171e8] text-[#2171e8]" : "bg-white text-[#9e9e9e]"}`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.name}
            </button>
          ))}
        </div>
            </div>
        </div>
        <div className="flex gap-12 items-center mt-10 lg:ml-20">
        <div className="w-1/3 bg-[#247cff] min-h-[444px] rounded-bl-2xl relative">
            <div className="absolute left-[-25px] top-[-40px] shadow-lg rounded-2xl p-6  bg-white min-h-96 flex flex-col items-center">
                <img src="/Fram.png" className="w-full h-[188px]" alt="" />
                <p className="text-[#212121] mt-1 text-[20px] font-medium">
                تجربه من از مبارزه با سرطان سینه
                </p>
                <div className="mt-8 w-full px-1">
                   <div className="flex items-center justify-between w-full">
                       <div>
                        <span className="text-[#212121] text-[20px] font-normal">سن :</span>
                        <span className="text-[18px] font-normal text-[#616161]">32 سال</span>
                       </div>
                       <div>
                        <span className="text-[#212121] text-[20px] font-normal">نام :</span>
                        <span className="text-[18px] font-normal text-[#616161]">ساحل امیری </span>
                       </div>
                   </div>
                </div>
                <div className="mt-4 w-full px-1">
                   <div className="flex items-center justify-between w-full">
                       <div>
                        <span className="text-[#212121] text-[20px] font-normal">بیماری  :</span>
                        <span className="text-[18px] font-normal text-[#616161]">سرطان سینه </span>
                       </div>
                       <div>
                        <span className="text-[#212121] text-[20px] font-normal">دکتر :</span>
                        <span className="text-[18px] font-normal text-[#616161]">امین محمدی </span>
                       </div>
                   </div>
                </div>
                <div className="text-[#616161] mt-2 text-[18px] font-normal">
                به مدت 3 سال با بیماری جنگیدم و نا امید نشدم
                </div>
            </div>
        </div>
        <div className="w-2/3 border rounded-2xl bg-white border-[#e0e0e0] p-2">
        
        <div className="flex items-center justify-between mb-4">
          {sections.map((section) => (
            <button
              key={section.key}
              className={`px-8 text-[16px] font-medium rounded-xl py-2 border ${activeSection === section.key ? "bg-blue-500 text-white" : "bg-[#f5f5f5] text-[#9e9e9e]"}`}
              onClick={() => setActiveSection(section.key)}
            >
              {section.name}
            </button>
          ))}
        </div>
        <div className="border p-4 rounded">
          {renderContent()}
          <div className="flex items-center gap-1 justify-end">
                       <img src="/Button1.png" alt="" />
                       <img src="/Button2.png" alt="" />
                       <button className="text-[#247cff] border border-[#247cff] px-8 py-3 text-[14px] font-medium rounded-xl">
                        مشاهده همه داستان ها
                       </button>
                  </div>
        </div>
      </div>
        </div>
      </div>
    );
  };
