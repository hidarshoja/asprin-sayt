"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyCarouselSlick.css"; // برای استایل‌های سفارشی

export default function ServicesDoctorBox() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-4">
      <div className="w-[280px] md:w-full  mx-auto lg:w-[408px]">
        <div className=" flex  gap-4 flex-col items-center px-6 py-[27px] rounded-2xl bg-[#2171eb]">
        <div className="w-full flex items-center justify-between lg:justify-center">
        <div className="flex flex-row items-center gap-1 lg:flex-col">
         <img src="/nurse.svg" className="w-[21px] h-[28px] lg:w-[50px] lg:h-[67px]" alt="" />
         <p className="text-white text-[14px] lg:text-[20px] font-bold">پرستار در منزل</p>
         </div>
         <button
          className="lg:hidden w-[74px] h-[32px] py-2 px-2 flex items-center justify-center text-[#247cff] text-[10px] font-medium rounded-xl bg-white"
          >
            مشاهده همه
          </button>
        </div>
          <span className="text-[#eee] text-[10px] lg:text-[14px] font-medium">
            این خدمت به ارائه مراقبت‌های پزشکی و پرستاری در محیط خانه بیمار
            اختصاص دارد.پرستاران حرفه‌ای به خانه بیمار می‌آیند و خدماتی مانند
            مراقبت‌های پس از عمل، مدیریت داروها، مراقبت از سالمندان را ارائه
            می‌دهند.
          </span>
          <button
          className="hidden w-[169px] h-[48px] py-3 px-8 lg:flex items-center justify-center text-[#247cff] text-[14px] font-medium rounded-xl bg-white"
          >
            مشاهده همه
          </button>
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <div className="carousel-container-services mt-4 overflow-hidden">
          <Slider {...settings}>
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="carousel-item-services p-4 flex flex-col items-center gap-4 justify-center"
              >
                <div className="lg:w-[237px] lg:h-[189px] rounded-full flex items-center justify-center bg-[#f5f5f5]">
                  <img src={item.imgSrc} className="w-[145px] h-[116px] lg:w-[237px] lg:h-[189px]" alt={item.altText} />
                </div>
                <p className="w-full text-center text-[14px] lg:text-[18px] font-IRANSans text-[#212121]">
                  {item.title}
                 
                  
                </p>
                <span
                className="w-full text-center text-[12px] lg:text-[14px] font-IRANSans text-[#757575]">
                {item.subtitle}
                </span>
              </div>
            ))}
          </Slider>
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
  {
    imgSrc: "/old.jpg",
    title: "پرستار سالمندان",
    subtitle: "۷۵ پرستار در اصفهان،   بیمار و انجام کارهای روزمره، ۲۴ ساعته و ۷ روز هفته",
  },
  {
    imgSrc: "/old2.jpg",
    title: "پرستار کودک",
    subtitle: "۷۵ پرستار در اصفهان،   بیمار و انجام کارهای روزمره، ۲۴ ساعته و ۷ روز هفته ",
  },
  {
    imgSrc: "/old3.jpg",
    title: "پرستار برای بیمار",
    subtitle: "۷۵ پرستار در اصفهان،   بیمار و انجام کارهای روزمره، ۲۴ ساعته و ۷ روز هفته",
  }

];
