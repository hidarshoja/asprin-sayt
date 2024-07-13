"use client";

import React, { useState } from "react";

export default function FAQComponent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "آیا اطلاعات من در سایت امن است؟",
      answer:
        "بله، از پروتکل‌های امنیتی پیشرفته برای حفاظت از اطلاعات شخصی و پزشکی شما استفاده می‌کنیم و تمام داده‌ها رمزگذاری شده‌اند، پس از این بابت آسوده خاطر باشید.",
    },
    {
      question: "آیا می‌توانم نوبت خود را لغو یا تغییر دهم؟",
      answer:
        "بله، می‌توانید نوبت خود را از طریق پروفایل کاربری لغو یا تغییر دهید.",
    },
    {
      question: "چگونه می‌توانم اطلاعات پزشکان را مشاهده کنم؟",
      answer:
        "با جستجوی نام پزشک مورد نظر می‌توانید اطلاعات کامل او را مشاهده کنید.",
    },
    {
      question: "چگونه می‌توانم نظرات خود را درباره پزشکان بنویسم؟",
      answer:
        "با ورود به پروفایل کاربری و انتخاب پزشک مورد نظر می‌توانید نظرات خود را ثبت کنید.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full h-[850px] lg:h-[550px] bg-gray-100 py-12 rtl">
      <div className="px-2 lg:l-0 lg:pr-10 flex flex-col lg:flex-row  gap-6">
        <div className="flex-1">
          <h2 className="text-[14px] lg:text-[30px] font-bold mb-6 text-right">
            <p className="text-[#2171e8] inline-block px-2">سوالات</p>
            متداول
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-start items-center bg-white p-4 rounded-lg shadow cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[#2171E8] w-[32px] h-[32px] flex items-center justify-center pl-2">
                  {activeIndex === index ? "-" : "+"}
                </span>
                <span className="text-[#212121] text-[12px] lg:text-[18px] text-right font-normal">{faq.question}</span>
              </div>
              {activeIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow mt-[-5px] border-t">
                  <p className="text-[#757575] text-right text-[12px] lg:text-[16px] font-normal">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 h-[200px] lg:h-[319px] rounded-2xl lg:rounded-r-2xl bg-[#2171e8] flex items-center justify-center px-6">
          <div className="bg-white mt-32 h-72 lg:h-96 p-6 rounded-2xl shadow-md flex flex-col items-center  lg:w-3/4">
            <img src="/customer.svg" alt="support" className="w-[72px] h-[72px] lg:w-[117px] lg:h-[117px]" />
            <h3 className="text-[16px] lg:text-[20px] font-medium mt-6 text-[#35383f]">نیاز به راهنمایی دارید؟</h3>
            <p className="text-[12px] lg:text-[16px] text-[#757575] text-center mt-2">
              روی دکمه زیر کلیک کنید و مستقیماً تماس بگیرید. شماره تماس:
              09120012345
            </p>
            <button className="bg-[#247cff] h-[56px] text-white mt-10 py-2 px-4 rounded-xl w-full text-[10px] lg:text-[16px] font-medium">
              تماس بگیرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
