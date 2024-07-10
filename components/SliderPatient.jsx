"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/Article.css"

export default function SliderDoctor() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 3000, // تغییر breakpoint به 1200px
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // تغییر breakpoint به 1200px
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-24">
      <div className="w-[100%]">
        <Slider {...settings} className="w-[90%] bg-white mx-auto Patientdiv">
          <div className="styleSliderBox  mt-12 relative">
              <div className="w-full h-[80px]">
                <div className="w-[111px] mx-auto relative">
                  <img src="/Doctor.svg" className="w-full absolute top-[-50px]" alt="" />
                </div>
              </div>
              <div className="w-full relative">
                 <span className="w-full h-[2px] bg-[#EEEDEB] block"></span>
                 <div className="mx-auto w-[133px]">

                 <div className="w-[133px] h-[19px] top-[-9px] rounded-2xl border bg-white border-1 border-[#EEEDEA]  absolute">
                  <span className="w-full h-[19px] flex items-center justify-center text-colorText text-[12px]">
                  محمد شیخی
                  </span>
                 </div>
                 </div>
              </div>
              <div className="w-full flex items-center justify-center mt-5">
                <span className="text-colorText text-[11px]">
                گرفتگی رگ قلب بعد از عمل جراحی
                </span>
              </div>
             <div className="flex items-center justify-center">
             <div className="bg-[#F9E7BE] rounded-3xl px-4 py-0.5 absolute bottom-[-15px]">
                <span className="text-colorText text-sm">خواندن تجربه</span>
              </div>
             </div>
          </div>
          <div className="styleSliderBox mt-12 relative">
              <div className="w-full h-[80px]">
                <div className="w-[111px] mx-auto relative">
                  <img src="/Doctor.svg" className="w-full absolute top-[-50px]" alt="" />
                </div>
              </div>
              <div className="w-full relative">
                 <span className="w-full h-[2px] bg-[#EEEDEB] block"></span>
                 <div className="mx-auto w-[133px]">

                 <div className="w-[133px] h-[19px] top-[-9px] rounded-2xl border bg-white border-1 border-[#EEEDEA]  absolute">
                  <span className="w-full h-[19px] flex items-center justify-center text-colorText text-[12px]">
                  محمد شیخی
                  </span>
                 </div>
                 </div>
              </div>
              <div className="w-full flex items-center justify-center mt-5">
                <span className="text-colorText text-[11px]">
                گرفتگی رگ قلب بعد از عمل جراحی
                </span>
              </div>
             <div className="flex items-center justify-center">
             <div className=" bg-[#F9E7BE] rounded-3xl px-4 py-0.5 absolute bottom-[-15px]">
                <span className="text-colorText text-sm">خواندن تجربه</span>
              </div>
             </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
