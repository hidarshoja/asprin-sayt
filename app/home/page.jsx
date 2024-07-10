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
const MainHome = () => {
  return (
    <div className="w-full h-auto">
      <SlideHeader />
      <div className="flex flex-col">
        <div className="flex  items-center justify-between mt-20 py-8 w-[98%] lg:w-[90%] mx-auto">
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
      </div>
      <div className="flex flex-col  overflow-hidden">
        <div className="flex items-center justify-between w-[98%] lg:w-[90%] mx-auto">
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
        <div className="flex flex-col w-[90%] mx-auto ">
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

      <FindDoctor />
      <Reservation />
      <Questions />
      <Experience />
      <div>
       
        <div className="relative mx-auto mt-48 h-[369px] w-[90%] rounded-lg bg-[#2171E8] p-4 bg-[url('/Group10.png')] bg-no-repeat bg-center lg:flex lg:flex-row flex flex-col">
 

        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-4 text-center lg:text-right">
            <h2 className="text-[24px] font-bold mb-2 mt-12 mr-12 text-white">
              صفحه رسمی ما را در اینستاگرام دنبال کنید
            </h2>
            <p className="text-[20px] font-normal text-justify mr-12 mt-3 text-[#eee] mb-4">
              به صفحه رسمی اینستاگرام ما بپیوندید و از جدیدترین اخبار، تخفیف‌ها
              و مقالات بهداشتی و درمانی باخبر شوید! با دنبال کردن ما در
              اینستاگرام، می‌توانید از تجربیات و نظرات دیگر کاربران بهره‌مند
              شوید و از خدمات ویژه ما مطلع گردید.
            </p>
            <button className="px-4 py-2 bg-white text-[#247cff] rounded-lg  flex items-center gap-1 text-[16px] font-medium mr-12 mt-10">
                <span>
                  <img src="/instagram.svg" alt="" />
                </span>
                <span>رفتن به اینستاگرام</span>
            </button>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end items-end relative">
            <div className="absolute bottom-[-16px] rounded-t-3xl shadow-lg ">
              <img
                src="/mobile1.png"
                alt="Instagram Screenshot"
                className="rounded-t-2xl w-[300px] h-[474px] " 
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MainHome;
