// MyCarouselSlick.js
"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MyCarouselSlick.css';  // برای استایل‌های سفارشی

const MyCarouselSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carousel-container mt-4 overflow-hidden">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item flex flex-col items-center justify-center">
            <div className='w-[81px] h-[81px] rounded-full flex items-center justify-center bg-[#f5f5f5]'>
              <img src={item.imgSrc} alt={item.altText} />
            </div>
            <p className='w-full text-center text-[16px] font-IRANSans text-[#424242]'>
              {item.title}
              <br />
              {item.subtitle}
            </p>
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
  { imgSrc: "/black/brain.svg", altText: "متخصص مغز و اعصاب", title: "متخصص", subtitle: "مغز و اعصاب" },
  { imgSrc: "/black/doctor.svg", altText: "دکتر داندان پزشک", title: "دکتر", subtitle: "داندان پزشک" },
  { imgSrc: "/black/Mask.svg", altText: "متخصص کودکان", title: "متخصص", subtitle: "کودکان" },
  { imgSrc: "/black/optometrist.svg", altText: "متخصص تغذیه", title: "متخصص", subtitle: "تغذیه" },
  { imgSrc: "/black/plan.svg", altText: "متخصص قلب", title: "متخصص", subtitle: "قلب" },
  { imgSrc: "/black/skin.svg", altText: "متخصص زنان", title: "متخصص", subtitle: "زنان" },
  { imgSrc: "/black/tooth.svg", altText: "متخصص رادیولوژی", title: "متخصص", subtitle: "رادیولوژی" }
];

export default MyCarouselSlick;
