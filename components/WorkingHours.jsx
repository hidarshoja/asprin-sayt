import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '200px',
};

const center = {
  lat: 36.2605,
  lng: 59.6168,
};

const WorkingHours = () => {
  return (
    <div className="w-full mt-10 py-4 pl-4 min-h-[360px]  border border-gray-200 rounded shadow-md relative">
        <div className='hidden lg:flex absolute left-3 top-[-15px] w-8 h-8 rounded-full bg-[#F9E6BE] text-colorText  text-[8px] items-center justify-center'>
            آسانسور
        </div>
        <div className='hidden lg:flex absolute left-14 top-[-15px] w-8 h-8 rounded-full bg-[#F9E6BE] text-colorText  text-[8px] items-center justify-center'>
            پارکینگ
        </div>
      <div className="flex flex-col lg:flex-row w-full gap-2 h-[100%]">
      
        <div className="w-full flex flex-col gap-8 justify-between">
          <h2 className="text-colorText w-[110px] px-1 py-3 rounded-tl-full font-semibold bg-[#FFF9E5]">ساعت کاری</h2>
          <div>
            <span className="text-colorText w-[110px] px-2 py-3 rounded-l-full font-semibold mb-2 bg-[#fffbee] border border-[#fef5d6]">شهریار:</span>
            <span className="mr-2 text-colorText text-[16px] lg:text-lg">شنبه، دوشنبه، چهارشنبه 17 الی 22</span>
          </div>
          <div>
            <span className="text-colorText w-[110px] px-2 py-3 rounded-l-full font-semibold mb-2 bg-[#fffbee] border border-[#fef5d6]">سعادت آباد:</span>
            <span className="mr-2 text-colorText text-[16px] lg:text-lg">شنبه، دوشنبه، چهارشنبه 17 الی 22</span>
          </div>
          <div className="flex justify-center flex-wrap gap-2">
            <div className="flex flex-col items-center gap-3">
              <a href="your-website-url" className="text-gray-600 hover:text-gray-800  w-[84px] h-[57px] bg-white rounded-lg border flex items-center justify-center shadow-md">
                <img src="/google.svg" className='w-8 h-8' alt="" />
              </a>
              <span className="text-sm font-bold text-colorText">آدرس سایت</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <a href="your-whatsapp-url" className="text-gray-600 hover:text-gray-800  w-[84px] h-[57px] bg-white rounded-lg border flex items-center justify-center shadow-md">
              <img src="/wats.svg" className='w-8 h-8' alt="" />
              </a>
              <span className="text-sm font-bold text-colorText">واتساپ</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <a href="your-telegram-url" className="text-gray-600 hover:text-gray-800  w-[84px] h-[57px] bg-white rounded-lg border flex items-center justify-center shadow-md">
              <img src="/wats.svg" className='w-8 h-8' alt="" />
              </a>
              <span className="text-sm font-bold text-colorText">تلگرام</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <a href="your-instagram-url" className="text-gray-600 hover:text-gray-800 w-[84px] h-[57px] bg-white rounded-lg border flex items-center justify-center shadow-md">
              <img src="/insta.svg" className='w-8 h-8' alt="" />
              </a>
              <span className="text-sm font-bold text-colorText">پیج اینستاگرام</span>
            </div>
          </div>
        </div>
        <div className="w-full p-2 relative hidden lg:flex">
          
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102474.66350721375!2d59.49085329909155!3d36.29708281930868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c9121c68a19d3%3A0x6f993ae5e6b1a5e5!2sMashhad%2C%20Razavi%20Khorasan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1621014460970!5m2!1sfa!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border rounded"
            title="Mashhad Map"
          ></iframe>
          <div className="absolute top-[-10px] text-colorText right-6  bg-[#F9E6BE] rounded-full px-3 py-1 text-sm">شهریار</div>
          <div className="absolute top-[-10px] text-[#7A91A0] right-24 bg-[#F0E9D9] rounded-full px-3 py-1 text-sm">سعادت آباد</div>
          <div className="absolute top-[-10px] text-[#7A91A0] right-48 bg-[#F0E9D9] rounded-full px-3 py-1 text-sm">آدرس سوم</div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
