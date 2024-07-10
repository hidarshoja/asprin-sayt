"use client"

import React, { useState } from 'react';
import UserComments from './UserComments';
import AboutComponent from './AboutComponent';
import WorkingHours from "./WorkingHours"

export default function CommentUser() {
  return (
    <div className='w-full min-h-[550px] mt-8 flex lg:gap-3'>
       
       <div className='w-full flex flex-col gap-3  lg:w-3/4'>
          <div className='w-full  bg-white rounded-lg min-h-[550px] shadow-md'>
             <UserComments />
         </div>
         <AboutComponent />
         <WorkingHours />
       </div>
       
       <div className='hidden lg:block lg:w-1/4 relative'>
             <div className='w-full border border-[#EEE] shadow-xl h-[263px] rounded-xl flex flex-col items-center bg-white py-2 justify-between sticky top-2'>
                         <img src="/doctor2.svg" className=' w-[50px] h-[50px] rounded-full border-4 border-[#f9e6be]' alt="" />
                         <p className='text-colorText font-bold text-xl'>
                         ارتباط با دکتر شاهی 
                         </p>
                         <div className='flex items-center gap-6 mt-3 w-full px-3'>
                            <div className='flex flex-col items-center  bg-[#FEF5D6] w-1/2 h-[100px] border rounded-lg justify-around'>
                                 <img src="/iphone.svg" alt="" />
                                 <p className='font-bold text-colorText text-xl'>
                                    تماس
                                 </p>
                            </div>
                            <div className='flex flex-col items-center  bg-[#FEF5D6] w-1/2 h-[100px] border rounded-lg justify-around'>
                                 <img src="/loc6.svg" alt="" />
                                 <p className='font-bold text-colorText text-xl'>
                                    مسیر یابی
                                 </p>
                            </div>
                         </div>
             </div>
       </div>
    </div>
  )
}
