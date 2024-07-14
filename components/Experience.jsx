"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyCarouselSlick2.css"; // برای استایل‌های سفارشی

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
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderContent = () => {
    switch (activeSection) {
      case "diagnosis":
        return (
          <div>
            <p>
              <span className="font-bold">حفظ روحیه : </span>توجه به رژیم غذایی
              سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک زیادی به
              من کرد.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span> حفظ روحیه مثبت و
              متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه
              کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span>داشتن یک شبکه
              حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی
              و امید برای من بودند.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span> سعی کردم تا حد
              امکان به فعالیت‌های روزمره‌ام ادامه دهم. ورزش‌های سبک مانند یوگا و
              پیاده‌روی به من کمک کردند تا انرژی بیشتری داشته باشم.
            </p>
          </div>
        );
      case "reactions":
        return (
          <div>
            <p>
              <span className="font-bold">حفظ روحیه : </span>توجه به رژیم غذایی
              سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک زیادی به
              من کرد.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span> داشتن یک شبکه
              حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی
              و امید برای من بودند.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span>سعی کردم تا حد
              امکان به فعالیت‌های روزمره‌ام ادامه دهم. ورزش‌های سبک مانند یوگا و
              پیاده‌روی به من کمک کردند تا انرژی بیشتری داشته باشم.
            </p>

            <p>
              <span className="font-bold">حفظ روحیه : </span> حفظ روحیه مثبت و
              متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه
              کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.
            </p>
          </div>
        );
      case "treatment":
        return (
          <div>
            <p>
              <span className="font-bold">حفظ روحیه : </span>توجه به رژیم غذایی
              سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک زیادی به
              من کرد.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span> داشتن یک شبکه
              حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی
              و امید برای من بودند.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span> سعی کردم تا حد
              امکان به فعالیت‌های روزمره‌ام ادامه دهم. ورزش‌های سبک مانند یوگا و
              پیاده‌روی به من کمک کردند تا انرژی بیشتری داشته باشم.
            </p>

            <p>
              <span className="font-bold">حفظ روحیه : </span> حفظ روحیه مثبت و
              متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه
              کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.
            </p>
          </div>
        );
      case "recommendations":
        return (
          <div>
            <p>
              <span className="font-bold">حمایت عاطفی : </span> داشتن یک شبکه
              حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی
              و امید برای من بودند.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span>سعی کردم تا حد
              امکان به فعالیت‌های روزمره‌ام ادامه دهم. ورزش‌های سبک مانند یوگا و
              پیاده‌روی به من کمک کردند تا انرژی بیشتری داشته باشم.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span> توجه به رژیم غذایی
              سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک زیادی به
              من کرد.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span> حفظ روحیه مثبت و
              متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه
              کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.
            </p>
          </div>
        );
      case "conclusion":
        return (
          <div>
            <p>
              <span className="font-bold">حمایت عاطفی : </span>داشتن یک شبکه
              حمایتی از خانواده و دوستان بسیار مهم است. آنها منبعی بزرگ از انرژی
              و امید برای من بودند.
            </p>
            <p>
              فعالیت‌های روزانه: سعی کردم تا حد امکان به فعالیت‌های روزمره‌ام
              ادامه دهم. ورزش‌های سبک مانند یوگا و پیاده‌روی به من کمک کردند تا
              انرژی بیشتری داشته باشم.
            </p>
            <p>
              <span className="font-bold"> تغذیه مناسب : </span> توجه به رژیم
              غذایی سالم و متعادل بسیار مهم بود. مشورت با یک متخصص تغذیه کمک
              زیادی به من کرد.
            </p>
            <p>
              <span className="font-bold">حفظ روحیه : </span> حفظ روحیه مثبت و
              متعادل چالش برانگیز بود، اما بسیار مهم است. من سعی کردم با مطالعه
              کتاب‌های انگیزشی و شرکت در جلسات مشاوره، روحم را حفظ کنم.
            </p>
          </div>
        );
      default:
        return <p>انتخاب کنید</p>;
    }
  };

  return (
    <div className="w-full bg-white min-h-[800px] py-3  lg:py-0 lg:h-[600px]">
      <div className="flex flex-col lg:flex-row mt-32 items-center justify-between w-[98%] lg:w-[85%]  mx-auto px-3 lg:px-0">
        <div className="w-full mr-[3%]  lg:w-1/4 text-[#35383f] text-[14px] lg:text-[30px] font-bold">
          داستان و تجربه بیماران
        </div>
        <div className="w-full lg:w-3/4">
          <div className="hidden lg:flex flex-wrap w-full items-center justify-end mb-4">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`px-4 py-2 text-[16px] font-medium mx-1 ${
                  activeCategory === category.key
                    ? "border-b-2 border-[#2171e8] text-[#2171e8]"
                    : "bg-white text-[#9e9e9e]"
                }`}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="carousel-container-box mt-10 overflow-hidden lg:hidden">
            <Slider {...settings}>
              {categories.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item-box2 cursor-pointer flex items-center justify-center text-[10px] border-b-2 font-IRANSans text-[#9e9e9e] py-2 px-6 ${
                    activeCarouselIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveCarouselIndex(index)}
                >
                  {item.name}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-start mt-10 lg:ml-12 ">
        <div className="w-full lg:w-[30%] lg:mr-10 lg:bg-[#247cff] min-h-[464px] rounded-bl-2xl relative">
          <div
            className="lg:absolute min-h-[443px] lg:left-[-25px] lg:top-[-27px] shadow-xl shadow-[#F1F1F1A1
] rounded-2xl p-3  bg-white  flex flex-col items-center"
          >
            <img
              src="/Fram.png"
              className="w-full lg:w-[360px] h-[188px]"
              alt=""
            />
            <p className="text-[#212121] mt-1 text-[14px] lg:text-[20px] font-medium">
              تجربه من از مبارزه با سرطان سینه
            </p>
            <div className="mt-8 w-full px-1">
              <div className="flex items-center justify-between w-full">
                <div>
                  <span className="text-[#212121] text-[14px] lg:text-[20px] font-normal">
                    سن :
                  </span>
                  <span className="text-[12px] lg:text-[18px] font-normal text-[#616161]">
                    32 سال
                  </span>
                </div>
                <div>
                  <span className="text-[#212121] text-[14px] lg:text-[20px] font-normal">
                    نام :
                  </span>
                  <span className="text-[12px] lg:text-[18px] font-normal text-[#616161]">
                    ساحل امیری{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 w-full px-1">
              <div className="flex items-center justify-between w-full">
                <div>
                  <span className="text-[#212121] text-[14px] lg:text-[20px] font-normal">
                    بیماری :
                  </span>
                  <span className="text-[12px] lg:text-[18px] font-normal text-[#616161]">
                    سرطان سینه{" "}
                  </span>
                </div>
                <div>
                  <span className="text-[#212121] text-[14px] lg:text-[20px] font-normal">
                    دکتر :
                  </span>
                  <span className="text-[12px] lg:text-[18px] font-normal text-[#616161]">
                    امین محمدی{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-[#616161] mt-2 text-[12px] lg:text-[18px] font-normal">
              به مدت 3 سال با بیماری جنگیدم و نا امید نشدم
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[59%] mt-[-25px] border rounded-2xl bg-white border-[#e0e0e0] min-h-[443px]">
          <div className="flex items-center p-4 flex-wrap gap-2 justify-between mb-4">
            {sections.map((section) => (
              <button
                key={section.key}
                className={`px-5 lg:px-8 text-[10px] lg:text-[16px] font-medium rounded-xl py-4 border ${
                  activeSection === section.key
                    ? "bg-blue-500 text-white"
                    : "bg-[#f5f5f5] text-[#9e9e9e]"
                }`}
                onClick={() => setActiveSection(section.key)}
              >
                {section.name}
              </button>
            ))}
          </div>
          <div className="w-full h-[1px] bg-[#9e9e9e]"></div>
          <div className="text-[12px] leading-10 lg:text-[18px] p-4 rounded font-medium">
            {renderContent()}
            <div className="flex items-center gap-1 justify-end">
              <img src="/Button1.png" className="h-[48px]" alt="" />
              <img src="/Button2.png" className="h-[48px]" alt="" />
              <button className="text-[#247cff] h-[48px] border border-[#247cff] px-3 lg:px-8 flex items-center justify-center text-[12px] lg:text-[14px] font-medium rounded-xl">
                مشاهده همه داستان ها
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const carouselItems = [
  { title: "پرستار در منزل" },
  { title: "درمانگاه و کلینیک" },
  { title: "آزمایشگاه" },
  { title: "مرکز تصویر برداری" },
  { title: "داروخانه" },
  { title: "آمبولانس خصوصی" },
  { title: "تجهیزات پزشکی" },
  { title: "دامپزشکی" },
  { title: "پزشک" },

  { title: "پزشک متخصص" },
];
