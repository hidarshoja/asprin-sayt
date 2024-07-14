import Link from "next/link";
import React from "react";
import "./home.css";
import SlideHeader from "@/components/SlideHeader";
import Carousel from "@/components/ServicesCarousel";
import ServicesDoctor from "@/components/ServicesDoctor";
import ServicesDoctorBox from "@/components/ServicesDoctorBox";
import OnlineDoctor from "@/components/OnlineDoctor";
import ScanningComponet from "@/components/ScanningComponet";
import FindDoctor from "@/components/FindDoctor";
import Reservation from "@/components/Reservation";
import Questions from "@/components/Questions";
import Experience from "@/components/Experience";
import InstagramComponents from "@/components/InstagramComponents";
const MainHome = () => {
  return (
    <div className="w-full h-auto">
      <SlideHeader />
      <div className="flex flex-col w-[98%] lg:w-[89%] xl:w-[80%] mx-auto px-3 lg:px-0">
        <div className="flex  items-center justify-between mt-[57px] py-8">
          <div className="text-[#35383f] text-[16px] lg:text-[24px] font-bold ">
            پر بازدید ترین تخصص ها
          </div>
          <div className="flex items-center gap-3 text-[#247CFF] text-[10px] lg:text-[16px] font-medium">
            <span>مشاهده همه</span>
            <span>
              <img src="/arrow.svg" alt="" />
            </span>
          </div>
        </div>
        <Carousel />
        <div className="flex items-center justify-between">
          <div className="text-[#35383f] text-[16px] font-IRANSans lg:text-[30px] font-bold">
            خدمات دکتر آسپرین
          </div>
          <div>
            <div className="relative hidden lg:flex items-center">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="جستجوی شهر"
                className="block w-full rounded-md border border-[#e0e0e0] py-[11px] pr-12 bg-white text-[#9E9E9E] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                
                <img
                  src="/search.svg"
                  className="w-6 h-6 mt-1 cursor-pointer"
                  alt=""
                />
              </div>
            </div>
            <div>
              <img
                src="/Button.png"
                className="flex lg:hidden cursor-pointer"
                alt=""
              />
            </div>
          </div>
        </div>
        <ServicesDoctor />
        <ServicesDoctorBox />
        <div className="flex flex-col">
          <div className="flex  items-center justify-between mt-20 py-8">
            <div className="text-[#35383f] text-[16px] lg:text-[24px] font-bold">
              پزشکان آنلاین دکتر آسپرین
            </div>
            <div className="flex items-center gap-3 text-[#247CFF] text-[10px] lg:text-[16px] font-medium">
              <span>مشاهده همه</span>
              <span>
                <img src="/arrow.svg" alt="" />
              </span>
            </div>
          </div>
          <OnlineDoctor />
        </div>
      </div>
      <ScanningComponet />
      <div className="flex flex-col  w-[98%] lg:w-[89%] xl:w-[80%] mx-auto px-3 lg:px-0">
        <FindDoctor />
        <Reservation />
      </div>
      <Questions />

      <div className="flex flex-col  overflow-hidden  pl-3 lg:pl-6">
        <Experience />
      </div>
      <div className="flex flex-col  w-[98%] lg:w-[89%] xl:w-[81%] mx-auto px-3 lg:px-0">

      <InstagramComponents />
      </div>
    </div>
  );
};

export default MainHome;
