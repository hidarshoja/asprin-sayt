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
    <div className="w-full bg-white px-6 py-11 rounded-lg shadow-md relative">
      <div className="flex items-start mb-4">
        <div className="w-1/4">
          <img
            src={currentDoctor.image}
            alt="doctor"
            className="w-[91px] h-[91px] rounded-xl"
          />
        </div>
        <div className="w-2/4">
          <h3 className="text-[24px] text-[#212121] font-bold">
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
        <div className="flex items-end ml-12 justify-end gap-3 flex-col mt-2 w-1/4">
          <div className="flex gap-1 text-yellow-400">
            <FaStarHalfAlt />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <button className="bg-[#2171e8] text-white text-[14px] py-1 px-6 rounded mr-4">
            رزرو نوبت
          </button>
        </div>
      </div>
      <p className="text-[16px] text-[#757575] mb-4">
        <span className="text-[#424242]">آدرس مطب:</span> {currentDoctor.address}
      </p>
      <p className="text-[#424242] text-[16px] font-medium text-right py-3">
        خدمات {currentDoctor.name}
      </p>
      <div className="flex gap-2">
        {currentDoctor.services.map((service, index) => (
          <span
            key={index}
            className="bg-[#fafafa] text-[#757575] text-[14px] font-normal py-1 px-2 rounded-[70px] border border-[#e0e0e0]"
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

