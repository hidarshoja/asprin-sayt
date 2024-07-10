import React, { useState } from 'react';

export default function AboutComponent() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

  return (
    <div className="w-full relative p-4 border border-gray-200 rounded shadow-md">
      <div className="flex  flex-col-reverse lg:flex-row py-3 h-auto">
      <div className={`w-full lg:w-1/2 ml-4 transition-max-height duration-300 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-60 overflow-hidden'}`}>
        <span className="text-base px-4 py-1 font-bold text-colorText bg-[#f3e2ab] rounded-tl-full">معرفی</span>
          <p className="text-[16px] text-[#31546b] leading-8 mt-8 ">
            دکتر مهرنوش مهدی نیا، ویندوزری متخصص زنان، زایمان و نازایی، فارغ التحصیل دانشگاه علوم پزشکی تهران.
            دارای گواهینامه لاپاراسکوپی و هیستروسکوپی و جراحی های زیبایی زنان و لیزر می باشم.
            با سالها سابقه در زمینه درمان بیماری های زنان، جراحی های زیبایی و زایمان و سزارین و از جمله درمان ناباروری در تهران و شهرستان ها از جمله بیمارستان نور...
            دارای گواهینامه لاپاراسکوپی و هیستروسکوپی و جراحی های زیبایی زنان و لیزر می باشم.
            با سالها سابقه در زمینه درمان بیماری های زنان، جراحی های زیبایی و زایمان و سزارین و از جمله درمان ناباروری در تهران و شهرستان ها از جمله بیمارستان نور...
          </p>
        </div>
        <div className='w-full lg:w-1/2'>

        <img 
          src="/imgAbout.png" 
          alt="Doctor performing a procedure" 
          className="w-full h-auto rounded object-cover"
        />
        </div>
       
      </div>
      <button 
        onClick={toggleExpand} 
        className="border rounded-md flex items-center gap-1 mt-2 absolute bottom-[-15px] bg-white left-1/2 translate-x-[-50%] text-gray-500 hover:text-gray-700 focus:outline-none p-1"
      >
        
        <span className="text-sm">
        {isExpanded ? 'نمایش کمتر' : 'نمایش بیشتر'}
        </span>
        <div className="w-4 h-4 rounded-full border">
        <img src="/ooui.svg" alt="" />
        </div>
      </button>
    </div>
  );
}
