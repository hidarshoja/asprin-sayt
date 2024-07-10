"use client"

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../app/home/ServicesPage/buttonCarousel.css"

const ButtonCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
 

    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mt-3">
      <Slider {...settings}>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
          پارکینسون
        </div>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
          سکته مغزی
        </div>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
          میگرن
        </div>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
          رادیولوژی
        </div>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
         3 پارکینسون
        </div>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
        2  پارکینسون
        </div>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
        1  سکته مغزی
        </div>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
          1میگرن
        </div>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
         1 رادیولوژی
        </div>
        <div className="px-2 py-1 rounded bg-[#edf8ff] text-[#657D8B] border flex items-center justify-center text-center">
         1 پارکینسون
        </div>
      </Slider>
    </div>
  );
};

export default ButtonCarousel;
