import React from "react";

export default function CardDoctor() {
    let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10 , 11 ,12]
  return (
    <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-12">
         {numbers.map((number , index) => (
      <div className="w-[366px] min-h-[185px] border border-[#F6F6F5] bg-[#FFF] rounded-[4px] shadow-2xl py-3 px-4 flex relative" key={index}>
        <div className="w-[75%]">
          <p className="text-colorText text-[20px] font-semibold">
            دکتر عبدالقیوم بفکین
          </p>
          <p className="text-[#9c9c9a] text-[14px] font-bold py-1 flex items-center gap-2">
            <span className="bg-colorText w-[5px] h-[5px] rounded-full"></span>
            <span>متخصص جراحی مغز و اعصاب و ستون فقرات</span>
          </p>
          <div className="flex gap-3 items-center justify-start mt-1">
            <span className="flex items-center justify-around gap-1 rounded-3xl border border-[#F0EFED] bg-[##FBFAF6] w-1/4">
              <span>
                <img src="/locMap.svg" className="w-2 h-2" alt="" />
              </span>
              <span className="text-[12px] text-colorText">شهریار</span>
            </span>
            <span className="flex items-center justify-around gap-1 rounded-3xl border border-[#F0EFED] bg-[##FBFAF6] w-1/4">
              <span>
                <img src="/locMap.svg" className="w-2 h-2" alt="" />
              </span>
              <span className="text-[12px] text-colorText">شهریار</span>
            </span>
          </div>
          <div className="flex gap-3 items-center justify-start mt-3">
            <span className="flex items-center justify-around gap-1 rounded-[3px] border border-[#CCE5F5] text-[12px] px-1 py-[2px] text-colorText bg-[#EDF8FF] w-1/6">
              آلزایمر
            </span>
            <span className="flex items-center justify-around gap-1 rounded-[3px] border border-[#CCE5F5] text-[12px] px-1 py-[2px] text-colorText bg-[#EDF8FF] w-1/6">
              آلزایمر
            </span>
            <span className="flex items-center justify-around gap-1 rounded-[3px] border border-[#CCE5F5] text-[12px] px-1 py-[2px] text-colorText bg-[#EDF8FF] w-1/6">
              آلزایمر
            </span>
            <span className="flex items-center justify-around gap-1 rounded-[3px] border border-[#CCE5F5] text-[12px] px-1 py-[2px] text-colorText bg-[#EDF8FF] w-1/6">
              آلزایمر
            </span>
            <span className="flex items-center justify-around gap-1 rounded-[3px] border border-[#CCE5F5] text-[12px] px-1 py-[2px] text-colorText bg-[#EDF8FF] w-1/6">
              آلزایمر
            </span>
            <span className="flex items-center justify-around gap-1 rounded-[3px] border border-[#CCE5F5] text-[12px] px-1 py-[2px] text-colorText bg-[#EDF8FF] w-1/6">
              آلزایمر
            </span>
            
          </div>
          <div className="w-[94%] flex items-center justify-between absolute bottom-[-10px] left-2">
                    <div className="flex items-center gap-2">
                      <div className="w-[52px] h-[22px] rounded-sm gap-1 flex items-center justify-center bg-[#304A59]">
                        <img
                          src="/call1.svg"
                          className="w-[15px] h-[15px]"
                          alt="1"
                        />
                        <span className="text-white text-xs">تماس</span>
                      </div>
                      
                      <div className="w-[80px] text-white text-xs h-[22px] rounded-sm flex items-center justify-center bg-[#304A59]">
                        مشاهده پرفایل
                      </div>
                    </div>
                    <div className="w-[40%] text-center h-[23px] bg-[#F4F4F4] rounded-md flex items-center px-2 text-colorText text-[8px]">
                      <div>4.3 (96 نظر)</div>
                    </div>
                  </div>
        </div>
        <div className="w-[25%]">
          <img src="/doctor2.svg" className="rounded-full w-full h-auto border-[3px] lg:border-[#fee5d6]" alt="" />
        </div>
      </div>
       ))}

       <div className="w-full flex items-center justify-center mt-10">
        <span className="text-[#000] text-base lg:text-[20px] font-bold">
        نمایش تعداد خدمات دهندگان در هر صفحه تا 30 مورد
        </span>
       </div>
    </div>
  );
}
