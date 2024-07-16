import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const doctorData = [
  {
    name: "دکتر سپهر محمدی",
    specialty: "متخصص بیماری های کودکان",
    location: "تهران، بیمارستان ابن سینا",
    address:
      "تهران، بلوار شهران شمالی،  علی، ساختمان  دکتر کریمخان، طبقه اول، واحد 1",
    services: ["دکتر درمان کودکان", "دکتر تغذیه", "دکتر شنوایی سنجی"],
    image: "/021.png",
  },
  {
    name: "دکتر نازنین احمدی",
    specialty: "متخصص قلب و عروق",
    location: "تهران، بیمارستان قلب تهران",
    address:
      "تهران، خیابان ولیعصر، بالاتر از پارک ساعی، بیمارستان قلب تهران، طبقه دوم",
    services: ["دکتر قلب", "مشاوره سلامت قلب", "دکتر تغذیه"],
    image: "/021.png",
  },
  {
    name: "دکتر مریم حسینی",
    specialty: "متخصص زنان و زایمان",
    location: "تهران، بیمارستان میلاد",
    address:
      "تهران، اتوبان همت، بیمارستان میلاد، طبقه چهارم، واحد 403",
    services: ["دکتر زنان", "مشاوره بارداری", "دکتر تغذیه"],
    image: "/021.png",
  },
];

export default function FindDoctorBox() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctorData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + doctorData.length) % doctorData.length
    );
  };

  const currentDoctor = doctorData[currentIndex];

  return (
    <div className="w-full bg-white p-3 lg:px-6 lg:py-2 xl:py-6 2xl:py-10 rounded-lg shadow-md relative border border-[#E0E0E0] min-h-[320px]  lg:min-h-[365px]">
      <div className="flex w-full justify-start  lg:justify-between items-start mb-4">
        <div className="flex items-center">
        <div>
          <img
            src={currentDoctor.image}
            alt="doctor"
            className="w-[64px] h-[64px] lg:w-[91px] lg:h-[91px] rounded-xl"
          />
        </div>
        <div className="hidden lg:flex flex-col gap-2 mr-[22px]">
          <h3 className="lg:text-[24px] text-[#212121] font-bold">
            {currentDoctor.name}
          </h3>
          <p className="text-[16px] font-normal text-[#616161]">
            {currentDoctor.specialty}
          </p>
          <p className="text-[16px] text-[#9e9e9e] font-normal flex items-center gap-1">
            <img src="/location.svg" className="w-5 h-5" alt="" />
            <span>{currentDoctor.location}</span>
          </p>
        </div>
        </div>
        <div className="hidden lg:flex items-end  justify-end gap-3 flex-col mt-2 ">
          <div className="flex gap-[1px]">
          <img src="/star05.svg" className="w-5 h-5 lg:w-7 lg:h-7" alt="" />
          <img src="/star10.svg" className="w-5 h-5 lg:w-7 lg:h-7" alt="" />
          <img src="/star10.svg" className="w-5 h-5 lg:w-7 lg:h-7" alt="" />
          <img src="/star10.svg" className="w-5 h-5 lg:w-7 lg:h-7" alt="" />
          <img src="/star10.svg" className="w-5 h-5 lg:w-7 lg:h-7" alt="" />
          </div>
          <button className="bg-[#2171e8] text-white text-[14px] h-12 w-[136px] px-7  rounded-xl ">
            رزرو نوبت
          </button>
        </div>
        <div className="flex flex-col lg:hidden items-start mr-2 gap-[1px]">
        <h3 className="text-[14px] text-[#212121] font-bold">
            {currentDoctor.name}
          </h3>
          <p className="text-[12px] font-normal text-[#616161]">
            {currentDoctor.specialty}
          </p>
          <p className="text-[12px] text-[#9e9e9e] font-normal flex items-center gap-1">
            <img src="/location.svg" className="w-4 h-4" alt="" />
            <span>{currentDoctor.location}</span>
          </p>
          <div className="flex gap-1 text-yellow-400">
            <img src="/star05.svg" className="w-5 h-5" alt="" />
            <img src="/star10.svg" className="w-5 h-5" alt="" />
            <img src="/star10.svg" className="w-5 h-5" alt="" />
            <img src="/star10.svg" className="w-5 h-5" alt="" />
            <img src="/star10.svg" className="w-5 h-5" alt="" />
          </div>
        </div>
      </div>
          <button className="bg-[#2171e8] w-full lg:w-[80%] mx-auto lg:hidden text-white text-[14px] py-1 px-6 rounded lg:mr-4">
            رزرو نوبت
          </button>
      <p className="text-[12px] mt-3 lg:text-[16px] text-[#757575]">
        <span className="text-[#424242]">آدرس مطب:</span> {currentDoctor.address}
      </p>
      <p className="text-[#424242] text-[12px] mt-4 lg:text-[16px] font-medium text-right">
        خدمات {currentDoctor.name}
      </p>
      <div className="flex items-center justify-start mt-3 gap-2">
        {currentDoctor.services.map((service, index) => (
          <span
            key={index}
            className="bg-[#fafafa] text-[#757575] flex items-center justify-center text-[12px] lg:text-[14px] font-normal px-[3px] py-1 overflow-hidden lg:py-3 lg:px-4 mt-3 rounded-[70px] border border-[#e0e0e0]"
          >
            {service}
          </span>
        ))}
      </div>
      <div className="flex absolute flex-col gap-1 left-[-14px] top-[40%]">
        <img
          src="/Button2.png"
          className="h-10 w-10 bg-white rounded-md cursor-pointer"
          alt=""
          onClick={handlePrevious}
        />
        <img
          src="/Button1.png"
          className="bg-white h-10 w-10 rounded-md cursor-pointer"
          alt=""
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

