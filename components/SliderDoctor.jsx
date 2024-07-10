"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // تغییر breakpoint به 1200px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="overflow-hidden">
      <div className="w-[100%]">
        <Slider {...settings} className="w-[90%] bg-white mx-auto stylePatientdiv">
          <div className="styleSlider">
            <div className="flex w-full">
              <div className="w-7/12 relative">
                <div className="flex w-full">
                  <div className="w-1/3 flex items-center">
                    <span className="text-colorText text-[9px] font-bold rounded-2xl border border-1 border-[#EEEDEA] bg-white px-2 py-[2px] ml-1">
                      شهریار
                    </span>
                    <div className="flex">
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-2/3"></div>
                </div>
                <div className="w-full mt-5 flex items-center justify-center gap-1">
                   <span className="text-colorText text-[20px] font-bold">دکتر محمد شیخی</span>
                   <img src="/Vector.svg" alt="" />
                </div>
                <div className="w-full flex items-center justify-center relative">
                    <span className="rounded-[20px] border border-1 border-[#EEEDEA] top-2 bg-white px-2 py-[2px] text-[8px] text-colorText font-bold absolute z-10">متخصص دهان و دندان</span>
                    <span className="w-full h-[2px] bg-[#EEEDEB] absolute top-[16px] z-0 left-1"></span>
                </div>
                <div className="absolute bottom-[-3px] left-2 flex items-end justify-end">
                    <span className="w-[96px] h-[19px] rounded-[20px] bg-[#F9E7BE] flex items-center justify-center text-colorText text-sm font-bold">تماس</span>  
                </div>
              </div>
              <div className="w-5/12 flex items-center justify-center h-[129px]">
                <img src="/Doctor.svg" className="w-[111px] h-[111px]" alt="" />
              </div>
            </div>
          </div>
          <div className="styleSlider">
            <div className="flex w-full">
              <div className="w-7/12 relative">
                <div className="flex w-full">
                  <div className="w-1/3 flex items-center">
                    <span className="text-colorText text-[9px] font-bold rounded-2xl border border-1 border-[#EEEDEA] bg-white px-2 py-[2px] ml-1">
                      شهریار
                    </span>
                    <div className="flex">
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                      <img
                        src="/star.svg"
                        className="w-[14px] h-[14px]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-2/3"></div>
                </div>
                <div className="w-full mt-5 flex items-center justify-center gap-1">
                   <span className="text-colorText text-[20px] font-bold">دکتر محمد رضایی</span>
                   <img src="/Vector.svg" alt="" />
                </div>
                <div className="w-full flex items-center justify-center relative">
                    <span className="rounded-[20px] border border-1 border-[#EEEDEA] top-2 bg-white px-2 py-[2px] text-[8px] text-colorText font-bold absolute z-10">متخصص دهان و دندان</span>
                    <span className="w-full h-[2px] bg-[#EEEDEB] absolute top-[16px] z-0 left-1"></span>
                </div>
                <div className="absolute bottom-[-3px] left-2 flex items-end justify-end">
                    <span className="w-[96px] h-[19px] rounded-[20px] bg-[#F9E7BE] flex items-center justify-center text-colorText text-sm font-bold">تماس</span>  
                </div>
              </div>
              <div className="w-5/12 flex items-center justify-center h-[129px]">
                <img src="/Doctor.svg" className="w-[111px] h-[111px]" alt="" />
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </div>
  );
}
