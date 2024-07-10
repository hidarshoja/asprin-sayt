"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MyCarouselSlick2.css';  // برای استایل‌های سفارشی

export default function ServicesDoctor() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container-box mt-10 overflow-hidden">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item-box flex  items-center justify-center  text-[10px] lg:text-[14px] font-IRANSans text-[#9e9e9e] py-[14px] px-8">
            
            
              {item.title}
            
          </div>
        ))}
      </Slider>
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
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const carouselItems = [
  { title: "پرستار در منزل" },
  { title: "درمانگاه و کلینیک" },
  { title: "آزمایشگاه" },
  {  title: "مرکز تصویر برداری" },
  {  title: "داروخانه" },
  { title: "آمبولانس خصوصی" },
  {  title: "تجهیزات پزشکی" },
  {  title: "دامپزشکی" },
  { title: "پزشک" }
 
];
