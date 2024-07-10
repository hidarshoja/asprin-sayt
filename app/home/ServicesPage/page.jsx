"use clinet"

import React from "react";
import SliderDoctor2 from "@/components/SliderDoctor2";
import BoxDoctorServices from "@/components/BoxDoctorServices";
import CommentUser from "@/components/CommentUser";
import ArticlesServices from "@/components/ArticlesServices";

export default function page() {
  return (
    <div>
      <div className="mt-16 w-full flex-col  min-h-[950px] lg:min-h-[1050px] xl:min-h-[1150px]">
        <p className="font-bold text-[14px] text-[#979797] px-8">
          خانه | پزشکان | متخصص زنان و زایمان | دکتر مریم شاهی
        </p>
        <BoxDoctorServices />
        <CommentUser />
        <div className="w-full  mt-20">
          <h3 className="text-center text-[#31546B] font-bold text-2xl py-8">سایر پزشکان مرتبط</h3>
          <div>
           <SliderDoctor2 />
          </div>
          <div className="mt-20 mb-10">
          <h3 className="text-center text-[#31546B] font-bold text-2xl py-8"> مقالات  مرتبط</h3>
            <ArticlesServices />
          </div>
        </div>
      </div>

    </div>
  );
}
