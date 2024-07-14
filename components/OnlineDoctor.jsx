"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyCarouselSlick.css"; 

const doctors = [
  {
    id: 1,
    image: "/04.png",
    ellImage: "/Ell.svg",
    name: "بردیا احمدیان",
    specialty: "متخصص بیماری های کودکان",
    rating: 4.9,
    consultations: 100,
  },
  {
    id: 2,
    image: "/doc2.png",
    ellImage: "/Ell.svg",
    name: "نگین رضایی",
    specialty: "متخصص بیماری‌های قلب",
    rating: 4.8,
    consultations: 85,
  },
  {
    id: 3,
    image: "/doc2.png",
    ellImage: "/Ell.svg",
    name: "سارا بهرامی",
    specialty: "متخصص بیماری‌های گوارش",
    rating: 4.7,
    consultations: 75,
  },
  {
    id: 4,
    image: "/04.png",
    ellImage: "/Ell.svg",
    name: "مهدی حیدری",
    specialty: "متخصص بیماری‌های پوست",
    rating: 4.6,
    consultations: 60,
  },
];

export default function OnlineDoctor() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
    <>
      <div className="w-full hidden lg:flex items-center gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="flex w-1/4  py-6 px-8 flex-col items-center  rounded-2xl bg-white border border-[#e0e0e0]"
          >
            <div className="relative">
              <img src={doctor.image} className="w-[64px] h-[64px] lg:w-[84px] lg:h-[84px]" alt="2" />
              <img src={doctor.ellImage} className="absolute bottom-1" alt="1" />
            </div>
            <span className="text-[#212121] text-[20px] mt-4 font-medium">
              {doctor.name}
            </span>
            <span className="text-[#757575] mt-1 text-[12px] lg:text-[16px] font-normal">
              {doctor.specialty}
            </span>
            <span className="flex items-center gap-1 mt-1 mb-8">
              <img src="/Star7.svg" className="w-5 h-5 lg:w-6 lg:h-6" alt="star" />
              <span className="text-[#FFA724] text-[12px] lg:text-[16px]">{doctor.rating}</span>
              <span className="text-[#BDBDBD] text-[12px] lg:text-[16px]">
                ({doctor.consultations} مشاوره)
              </span>
            </span>
            <button className="w-full h-12 px-8 rounded-2xl border border-[#e0e0e0] bg-white text-[#247cff] flex items-center justify-center gap-2">
              <span>نوبت بگیرید</span>
              <span>
                <img src="/arr.svg" alt="" />
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="w-full lg:hidden">
        <div className="flex flex-col lg:flex-row items-center justify-center">
         
          <div className="w-full">
            <div className="carousel-container-services mt-4 overflow-hidden">
              <Slider {...settings}>
                {doctors.map((doctor, index) => (
                  <div
                  key={doctor.id}
                  className="flex  py-6 px-8 flex-col items-center justify-center gap-8 rounded-2xl bg-white border border-[#e0e0e0]"
                >
                  <div className="relative w-full flex items-center justify-center">
                    <img src={doctor.image} alt="" />
                    <img src={doctor.ellImage} className="absolute bottom-1 left-[90px]" alt="" />
                  </div>
                  <span className="text-[#212121] text-[14px] py-2 font-medium block text-center">
                    {doctor.name}
                  </span>
                  <span className="text-[#757575] text-[12px] font-normal block text-center">
                    {doctor.specialty}
                  </span>
                  <span className="flex items-center justify-center py-1 gap-1 text-[12px] w-full">
                    <span className="text-[#BDBDBD] text-[12px]">
                      ({doctor.consultations} مشاوره)
                    </span>
                    <span className="text-[#FFA724]">{doctor.rating}</span>
                    <img src="/star1.svg" alt="star" />
                  </span>
                  <button className="w-full py-2 px-6 rounded-[4px] border border-[#247CFF] bg-white text-[#247cff] flex items-center justify-center gap-2">
                    <span>
                      <img src="/arr.svg" alt="" />
                    </span>
                    <span className="text-[10px]">نوبت بگیرید</span>
                  </button>
                </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
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
