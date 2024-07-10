"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]);

export default function SwiperDoctor2() {
  const settings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false,
    },
    breakpoints: {
      3000: {
        slidesPerView: 3,
        slidesToScroll: 1,
      },
      1200: {
        slidesPerView: 3,
        slidesToScroll: 1,
      },
      1024: {
        slidesPerView: 2,
        slidesToScroll: 1,
      },
      768: {
        slidesPerView: 1,
        slidesToScroll: 1,
      },
      468: {
        slidesPerView: 1,
        slidesToScroll: 1,
      },
    },
  };

  const doctorData = [
    {
      name: "دکتر عبدالقیوم بفکین",
      specialty: "متخصص جراحی مغز و اعصاب و ستون فقرات",
      locations: ["شهریار", "شهریار"],
      ratings: [
        "آلزایمر",
        "آلزایمر",
        "آلزایمر",
        "آلزایمر",
        "آلزایمر",
        "آلزایمر",
      ],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر محسن رضایی",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر محسن رضایی",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر سعید رضایی",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر محسن شجاع",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
    {
      name: "دکتر جعفر رضایی",
      specialty: "متخصص قلب و عروق",
      locations: ["تهران", "مشهد"],
      ratings: ["قلب", "عروق", "قلب", "عروق", "قلب", "عروق"],
      imgSrc: "/doctor2.svg",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="w-[100%]">
        <Swiper {...settings} className="w-[90%] bg-[#FBFAF6] mx-auto h-[200px]">
          {doctorData.map((doctor, index) => (
            <SwiperSlide key={index}>
              <div className="w-full md:w-[366px] min-h-[185px] border border-[#F6F6F5] bg-white rounded-[4px]  py-3 px-4 flex relative">
                <div className="w-[75%]">
                  <p className="text-[#657D8B] text-[20px] font-semibold">
                    {doctor.name}
                  </p>
                  <p className="text-[#9c9c9a] text-[14px] font-bold py-1 flex items-center gap-2">
                    <span className="bg-colorText w-[5px] h-[5px] rounded-full"></span>
                    <span>{doctor.specialty}</span>
                  </p>
                  <div className="flex gap-3 items-center justify-start mt-1">
                    {doctor.locations.map((location, locIndex) => (
                      <span
                        key={locIndex}
                        className="flex items-center justify-around gap-1 rounded-3xl border border-[#f0efed] bg-[#fbfaf6] w-1/4"
                      >
                        <span>
                          <img src="/locMap.svg" className="w-2 h-2" alt="" />
                        </span>
                        <span className="text-[12px] text-[#646568]">
                          {location}
                        </span>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 items-center justify-start mt-3">
                    {doctor.ratings.map((rating, ratingIndex) => (
                      <span
                        key={ratingIndex}
                        className="flex items-center justify-around gap-1 rounded-[3px] border border-[#EDF8FF] text-[12px] text-[#304A59] bg-[#F8FEFF] w-1/6"
                      >
                        {rating}
                      </span>
                    ))}
                  </div>
                  <div className="w-[94%] flex items-center justify-between absolute bottom-[-10px] left-2">
                    <div className="flex items-center gap-2">
                      <div className="w-[52px] h-[22px] rounded-sm gap-1 flex items-center justify-center bg-[#406479]">
                        <img
                          src="/call1.svg"
                          className="w-[15px] h-[15px]"
                          alt="1"
                        />
                        <span className="text-white text-[10px]">تماس</span>
                      </div>
                      
                      <div className="w-[80px] text-white text-xs h-[22px] rounded-sm flex items-center justify-center bg-[#406479] text-[10px]">
                        مشاهده پرفایل
                      </div>
                    </div>
                    <div className="w-[40%] text-center h-[23px] bg-[#F4F4F4] rounded-md flex items-center px-2 text-[#979797] text-[8px]">
                      <div>4.3 (96 نظر)</div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%]">
                  <img
                    src={doctor.imgSrc}
                    className="rounded-full w-full h-auto border-[3px] lg:border-[#fee5d6]"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

