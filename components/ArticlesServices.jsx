"use client";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Article.css"

export default function ArticlesServices() {
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
    <>
     
      <div>
      <div className="overflow-hidden">
      <div className="w-[100%]">
        <Slider {...settings} className="w-[90%] bg-white mx-auto">
        <div className="h-[290px] w-full  rounded-lg cardAreicleServices">
            <div className="w-full">
              <img src="/Articles2.svg" className="w-full" alt="" />
            </div>
            <div className="flex flex-col justify-between p-2">
             <span className="text-colorText text-[19px] font-bold py-2">
             دیابت چیست و آیا درمانی دارد ؟
             </span>
            
             <div className="border-t-[1px] pt-1 flex items-center justify-between">
                <span></span>
                <span className="text-gray-500 text-[18px]">
                عرشیا نوروزی                                    
                </span>
                <span className="text-gray-500 text-[18px]">
                آبان ۲۴, ۱۴۰۱
                </span>
             </div>
          </div>
          </div>
          <div className="h-[290px] w-full  rounded-lg cardAreicleServices">
            <div className="w-full">
              <img src="/Articles2.svg" className="w-full" alt="" />
            </div>
            <div className="flex flex-col justify-between p-2">
             <span className="text-colorText text-[19px] font-bold py-2">
             دیابت چیست و آیا درمانی دارد ؟
             </span>
            
             <div className="border-t-[1px] pt-1 flex items-center justify-between">
                <span></span>
                <span className="text-gray-500 text-[18px]">
                عرشیا نوروزی                                    
                </span>
                <span className="text-gray-500 text-[18px]">
                آبان ۲۴, ۱۴۰۱
                </span>
             </div>
          </div>
          </div>
          
        </Slider>
      </div>
    </div>
      </div>
    </>
  );
}
