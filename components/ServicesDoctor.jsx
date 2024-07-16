"use client"

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './MyCarouselSlick2.css'; 

export default function SwiperCarousel() {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(null);

  const settings = {
    slidesPerView: 8.5,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4.5,
      },
      600: {
        slidesPerView: 2.5,
      },
    },
  };

  return (
    <div className="mt-4 lg:mt-10 overflow-hidden">
      <Swiper {...settings} onSlideChange={(swiper) => setActiveCarouselIndex(swiper.activeIndex)}>
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index} 
          className={` ${
            activeCarouselIndex === index ? 'swiper-slide-active' : ''
          }`}
          onClick={() => setActiveCarouselIndex(index)}
          >
            {item.title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const carouselItems = [
  { title: "پرستار در منزل" },
  { title: "درمانگاه و کلینیک" },
  { title: "آزمایشگاه" },
  { title: "مرکز تصویر برداری" },
  { title: "داروخانه" },
  { title: "آمبولانس خصوصی" },
  { title: "دامپزشکی" },
  { title: "تجهیزات پزشکی" },
  { title: "پزشک" },
  { title: "پزشک متخصص" },
];

